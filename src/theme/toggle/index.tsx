"use client";

import { useColorMode, useTheme } from "../theme-context";

export type ColorModeToggleProps = {
  label?: string;
};

export function ColorModeToggle({ label }: ColorModeToggleProps) {
  const { mode, toggle } = useColorMode();
  const t = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      style={{
        padding: "10px 12px",
        borderRadius: 10,
        border: `1px solid ${t.color.border.default}`,
        background: t.color.bg.surface,
        color: t.color.text.primary,
        cursor: "pointer",
        width: "fit-content",
      }}
    >
      {label ?? (mode === "light" ? "Switch to Dark" : "Switch to Light")}
    </button>
  );
}
