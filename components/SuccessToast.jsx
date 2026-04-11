"use client";
import { useEffect } from "react";

export default function SuccessToast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  return <div className="fixed right-4 top-20 z-[120] border border-teal-300 bg-teal-500/20 px-4 py-2 text-teal-100">{message}</div>;
}
