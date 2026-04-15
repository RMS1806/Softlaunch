"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createHash } from "crypto";

// ── Hardcoded Admin Emails ──────────────────────────────
const ADMIN_EMAILS = [
  "admin@finova.com",
  // Add more admin emails here
];

const ADMIN_BYPASS_EMAIL = "admin@finova.com";
const ADMIN_BYPASS_PASSWORD = "admin123";

function isAdmin(email) {
  return ADMIN_EMAILS.includes(email?.toLowerCase());
}

function isAdminBypassCredential(email, password) {
  return email === ADMIN_BYPASS_EMAIL && password === ADMIN_BYPASS_PASSWORD;
}

// ── Helper: hash password ───────────────────────────────
function hashPassword(password) {
  return createHash("sha256").update(password).digest("hex");
}

// ── Helper: get current session user ────────────────────
async function getSessionUser() {
  const cookieStore = cookies();
  const email = cookieStore.get("session_email")?.value;
  if (!email) return null;

  const supabase = createClient();
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user && isAdmin(email)) {
    return { email, is_admin_bypass: true };
  }

  return user;
}

// ── Auth Actions ────────────────────────────────────────

export async function loginAction(formData) {
  const supabase = createClient();
  const email = formData.get("email")?.toLowerCase()?.trim();
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Operator_Email and Access_Key are required." };
  }

  if (isAdminBypassCredential(email, password)) {
    const cookieStore = cookies();
    cookieStore.set("session_email", email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    revalidatePath("/", "layout");
    redirect("/admin");
  }

  // Look up user by email
  const { data: user, error: dbError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (dbError || !user) {
    return { error: "Invalid credentials. Identity not found." };
  }

  // Compare password hash
  const inputHash = hashPassword(password);
  if (user.password_hash !== inputHash) {
    return { error: "Invalid credentials. Access denied." };
  }

  // Set session cookie
  const cookieStore = cookies();
  cookieStore.set("session_email", email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  revalidatePath("/", "layout");

  // Redirect admins to admin panel, others to dashboard
  if (isAdmin(email)) {
    redirect("/admin");
  }
  redirect("/dashboard");
}

export async function registerAction(formData) {
  const supabase = createClient();
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.toLowerCase()?.trim();
  const roll = formData.get("roll")?.trim();
  const year = formData.get("year");
  const phone = formData.get("phone")?.trim();
  const password = formData.get("password");

  if (!name || !email || !roll || !password) {
    return { error: "Core fields missing. Verify input matrix." };
  }

  // Check if email already exists
  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  if (existingUser) {
    return { error: "This email is already registered. Proceed to login." };
  }

  // Check if roll number already exists
  const { data: existingRoll } = await supabase
    .from("users")
    .select("id")
    .eq("roll_number", roll)
    .single();

  if (existingRoll) {
    return { error: "This Roll ID is already registered." };
  }

  // Hash password and insert user
  const passwordHash = hashPassword(password);

  const { error: dbError } = await supabase.from("users").insert({
    name,
    email,
    roll_number: roll,
    branch: "OTHER", // Branch removed from form, default to OTHER
    year: year || "1",
    phone: phone || null,
    password_hash: passwordHash,
  });

  if (dbError) {
    console.error("Registration failed:", dbError);
    return { error: "Registration failed. Please try again." };
  }

  // Set session cookie and go directly to dashboard
  const cookieStore = cookies();
  cookieStore.set("session_email", email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logoutAction() {
  const cookieStore = cookies();
  cookieStore.delete("session_email");
  revalidatePath("/", "layout");
  redirect("/");
}

// ── Team Actions ────────────────────────────────────────

export async function createTeamAction(formData) {
  const user = await getSessionUser();
  if (!user) return { error: "Authentication failed. Command not recognized." };

  const supabase = createClient();
  const squadName = formData.get("squadName");
  if (!squadName || squadName.length < 3) return { error: "Squad Name must be at least 3 characters." };

  const inviteCode = "FIN-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  // Insert Team
  const { data: team, error: teamError } = await supabase.from("teams").insert({
    name: squadName,
    invite_code: inviteCode,
    leader_id: user.id
  }).select("id").single();

  if (teamError) {
    console.error("Team creation error:", teamError);
    return { error: "Failed to initialize squad." };
  }

  // Insert Member (Leader)
  const { error: memberError } = await supabase.from("team_members").insert({
    team_id: team.id,
    user_id: user.id,
    role: "leader"
  });

  if (memberError) {
    console.error("Member insert error:", memberError);
    return { error: "Squad created, but failed to assign roles." };
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/team");
  return { success: true, code: inviteCode };
}

export async function joinTeamAction(formData) {
  const user = await getSessionUser();
  if (!user) return { error: "Authentication failed. Command not recognized." };

  const supabase = createClient();
  const inviteCode = formData.get("inviteCode");
  if (!inviteCode) return { error: "Invite code missing." };

  // Find Team
  const { data: team, error: teamError } = await supabase.from("teams").select("id").eq("invite_code", inviteCode).single();

  if (teamError || !team) return { error: "Invalid synchronization code." };

  // Insert Member
  const { error: memberError } = await supabase.from("team_members").insert({
    team_id: team.id,
    user_id: user.id,
    role: "member"
  });

  if (memberError) {
    if (memberError.code === "23505") return { error: "You are already in a squad." };
    return { error: "Failed to join squad." };
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/team");
  return { success: true };
}

// ── Submission Actions ──────────────────────────────────

export async function submitProjectAction(formData) {
  const user = await getSessionUser();
  if (!user) return { error: "Authentication failed. Command not recognized." };

  const supabase = createClient();
  const title = formData.get("title");
  const description = formData.get("description");
  const repo_url = formData.get("repo_url");
  const file_url = formData.get("file_url");

  if (!title || !description || !repo_url) {
    return { error: "Missing required core submission parameters." };
  }

  // Get user's team
  const { data: userMember } = await supabase
    .from("team_members")
    .select("team_id")
    .eq("user_id", user.id)
    .single();

  if (!userMember?.team_id) {
    return { error: "You must be in a squad to deploy a payload." };
  }

  const { error } = await supabase.from("submissions").insert({
    team_id: userMember.team_id,
    submitted_by: user.id,
    title,
    description,
    repo_url,
    file_url: file_url || ""
  });

  if (error) return { error: "Payload upload failed. Retrying sync..." };

  revalidatePath("/dashboard/submit");
  return { success: true };
}

// ── Announcement Actions ────────────────────────────────

export async function publishAnnouncementAction(formData) {
  const user = await getSessionUser();
  if (!user) return { error: "Authentication required." };

  const supabase = createClient();
  const tag = formData.get("tag");
  const text = formData.get("text");

  if (!tag || !text) return { error: "Tag and message are required." };

  const { error } = await supabase.from("announcements").insert({
    tag: tag.toUpperCase(),
    text,
  });

  if (error) return { error: "Failed to publish announcement." };

  revalidatePath("/dashboard");
  revalidatePath("/admin/announcements");
  return { success: true };
}

export async function deleteAnnouncementAction(id) {
  const user = await getSessionUser();
  if (!user) return { error: "Authentication required." };

  const supabase = createClient();
  const { error } = await supabase.from("announcements").delete().eq("id", id);

  if (error) return { error: "Failed to delete announcement." };

  revalidatePath("/dashboard");
  revalidatePath("/admin/announcements");
  return { success: true };
}

// ── Problem Statement Actions ───────────────────────────

export async function addProblemStatementAction(formData) {
  const user = await getSessionUser();
  if (!user) return { error: "Authentication required." };

  const supabase = createClient();
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category") || "GENERAL";
  const difficulty = formData.get("difficulty") || "MEDIUM";

  if (!title || !description) return { error: "Title and description are required." };

  const { error } = await supabase.from("problem_statements").insert({
    title,
    description,
    category: category.toUpperCase(),
    difficulty,
  });

  if (error) {
    console.error("Problem statement insert error:", error);
    return { error: "Failed to add problem statement." };
  }

  revalidatePath("/admin/problems");
  revalidatePath("/dashboard");
  return { success: true };
}

export async function deleteProblemStatementAction(id) {
  const user = await getSessionUser();
  if (!user) return { error: "Authentication required." };

  const supabase = createClient();
  const { error } = await supabase.from("problem_statements").delete().eq("id", id);

  if (error) return { error: "Failed to delete problem statement." };

  revalidatePath("/admin/problems");
  revalidatePath("/dashboard");
  return { success: true };
}
