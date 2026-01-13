export type ColorTokens = {
  text: {
    primary: string;
    muted: string;
    inverse: string;
    brand: string;
  };
  bg: {
    canvas: string;
    surface: string;
  };
  border: {
    default: string;
  };
};

export type ThemeMode = "light" | "dark";

export const colorsByMode: Record<ThemeMode, ColorTokens> = {
  light: {
    text: {
      primary: "#111827",
      muted: "#6B7280",
      inverse: "#FFFFFF",
      brand: "#2563EB",
    },
    bg: {
      canvas: "#FFFFFF",
      surface: "#F9FAFB",
    },
    border: {
      default: "#E5E7EB",
    },
  },

  dark: {
    text: {
      primary: "#F9FAFB",
      muted: "#9CA3AF",
      inverse: "#111827",
      brand: "#60A5FA",
    },
    bg: {
      canvas: "#0B1220",
      surface: "#111827",
    },
    border: {
      default: "#1F2937",
    },
  },
};
