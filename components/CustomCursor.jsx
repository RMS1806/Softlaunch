"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + "px";
        ring.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#61f4d8] shadow-[0_0_6px_#61f4d8]"
        style={{ position: "fixed", transition: "none" }}
      />
      {/* Ring */}
      <div
        ref={ring}
        className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#61f4d8]/40"
        style={{ position: "fixed", transition: "left 0.08s ease-out, top 0.08s ease-out" }}
      />
    </>
  );
}
