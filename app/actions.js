"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(formData) {
  const supabase = createClient();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Operator_Email and Access_Key are required." };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function registerAction(formData) {
  const supabase = createClient();
  const name = formData.get("name");
  const email = formData.get("email");
  const roll = formData.get("roll");
  const branch = formData.get("branch");
  const year = formData.get("year");
  const phone = formData.get("phone");
  const password = formData.get("password");

  if (!name || !email || !roll || !password) {
    return { error: "Core fields missing. Verify input matrix." };
  }

  // 1. Authenticate with Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
        roll_number: roll,
        branch: branch,
        academic_year: parseInt(year) || 1,
        phone: phone,
      },
    },
  });

  if (authError) {
    return { error: authError.message };
  }

  // 2. Insert custom user record into public.users
  if (authData.user) {
    const { error: dbError } = await supabase.from("users").insert({
      id: authData.user.id, // match the auth UUID
      name: name,
      email: email,
      roll_number: roll,
      branch: branch,
      year: parseInt(year) || 1,
      phone: phone,
      // Note: password_hash isn't strictly necessary here since Supabase Auth handles password security,
      // but if your schema requires it, we insert a placeholder or the raw (not recommended). 
      // Assuming your schema allows omitting password_hash.
    });

    if (dbError) {
      console.error("Profile creation failed:", dbError);
      // We don't necessarily block login if profile fails, but it's good to log
    }
  }

  revalidatePath("/", "layout");
  redirect("/verify-email");
}

export async function logoutAction() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function createTeamAction(formData) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Authentication failed. Command not recognized." };

  const squadName = formData.get("squadName");
  if (!squadName || squadName.length < 3) return { error: "Squad Name must be at least 3 characters." };

  const inviteCode = "FIN-" + Math.random().toString(36).substring(2, 8).toUpperCase();

  // Insert Team
  const { data: team, error: teamError } = await supabase.from("teams").insert({
    name: squadName,
    invite_code: inviteCode,
    leader_id: user.id
  }).select("id").single();

  if (teamError) return { error: "Failed to initialize squad." };

  // Insert Member (Leader)
  const { error: memberError } = await supabase.from("team_members").insert({
    team_id: team.id,
    user_id: user.id,
    role: "leader"
  });

  if (memberError) return { error: "Squad created, but failed to assign roles." };

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/team");
  return { success: true, code: inviteCode };
}

export async function joinTeamAction(formData) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Authentication failed. Command not recognized." };

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
    if (memberError.code === "23505") return { error: "You are already in a squad." }; // Unique constraint
    return { error: "Failed to join squad." };
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/team");
  return { success: true };
}

export async function submitProjectAction(formData) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Authentication failed. Command not recognized." };

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

  // Log performance activity bonus
  await supabase.from("performance_metrics").insert({
    user_id: user.id,
    day_of_week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date().getDay()],
    activity_level: 95
  }).upsert({ user_id: user.id, day_of_week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date().getDay()] }, { onConflict: "user_id, day_of_week" });

  revalidatePath("/dashboard/submit");
  return { success: true };
}

export async function publishAnnouncementAction(formData) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Authentication required." };

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
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Authentication required." };

  const { error } = await supabase.from("announcements").delete().eq("id", id);

  if (error) return { error: "Failed to delete announcement." };

  revalidatePath("/dashboard");
  revalidatePath("/admin/announcements");
  return { success: true };
}
