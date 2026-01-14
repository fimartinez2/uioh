"use client";

import * as React from "react";
import { useTheme } from "../../theme";
import { resolveColor } from "@core";
import type { LinkProps } from "./core/types";

export function Link({
  href,
  children,
  external,
  color = "text.brand",
  underline = true,
}: LinkProps) {
  const t = useTheme();

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        color: resolveColor(t, color),
        textDecoration: underline ? "underline" : "none",
        fontWeight: t.typography.fontWeight.medium,
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}
