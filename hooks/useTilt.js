"use client";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export function useTilt(ref) {
  useEffect(() => {
    if (!ref.current) return;
    VanillaTilt.init(ref.current, { max: 8, speed: 400, glare: true, "max-glare": 0.15 });
    return () => ref.current?.vanillaTilt?.destroy();
  }, [ref]);
}
