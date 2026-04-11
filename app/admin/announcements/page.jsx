"use client";
import { useState } from "react";
import SuccessToast from "@/components/SuccessToast";
export default function AdminAnnouncements() {
  const [toast, setToast] = useState(false);
  return <section><h1 className="text-3xl font-black">Announcements</h1><form onSubmit={(e)=>{e.preventDefault();setToast(true);}} className="mt-4 space-y-3"><textarea className="w-full bg-black p-3" required placeholder="Write announcement"/><button className="border border-teal-300 px-4 py-2 text-teal-300">Publish</button></form>{toast && <SuccessToast message="Announcement published" onClose={()=>setToast(false)} />}</section>;
}
