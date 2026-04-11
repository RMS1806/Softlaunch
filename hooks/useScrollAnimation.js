"use client";
import { useEffect } from "react";

export function useScrollAnimation(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("opacity-100", entry.isIntersecting));
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}
