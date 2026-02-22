"use client";

import type { CSSProperties, ReactNode } from "react";

interface Props {
  to: string; // section id — without the #
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function ScrollLink({ to, className, style, children }: Props) {
  const handleClick = () => {
    const el = document.getElementById(to);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
