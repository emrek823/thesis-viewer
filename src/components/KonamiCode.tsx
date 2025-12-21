"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKeys = [...keys, e.key].slice(-10);
      setKeys(newKeys);

      if (newKeys.join(",") === KONAMI_CODE.join(",")) {
        setActivated(true);
        setShow(true);
        setTimeout(() => setShow(false), 5000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keys]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
      <div className="bg-black/90 text-white p-8 rounded-none border-4 border-accent animate-bounce">
        <p className="pixel-header text-lg text-center mb-4">
          ★ CHEAT ACTIVATED ★
        </p>
        <p className="pixel-header text-xs text-center text-accent mb-4">
          +30 CONVICTION POINTS
        </p>
        <div className="flex justify-center gap-2">
          {["★", "★", "★"].map((star, i) => (
            <span
              key={i}
              className="text-2xl animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {star}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">
          (just kidding, keep researching)
        </p>
      </div>
    </div>
  );
}
