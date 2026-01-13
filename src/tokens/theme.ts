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

export type TypographyTokens = {
  fontFamily: {
    base: string;
    mono: string;
  };
  fontSize: {
    h1: number;
    h2: number;
    h3: number;
    body: number;
    bodyStrong: number;
    caption: number;
    label: number;
  };
  lineHeight: {
    h1: number;
    h2: number;
    h3: number;
    body: number;
    caption: number;
    label: number;
  };
  fontWeight: {
    regular: "400";
    medium: "500";
    semibold: "600";
    bold: "700";
  };
};

export type DesignTokens = {
  color: ColorTokens;
  typography: TypographyTokens;
};

export type ThemeMode = "light" | "dark";

export const tokensByMode: Record<ThemeMode, DesignTokens> = {
  light: {
    color: {
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
    typography: {
      fontFamily: {
        base: "System",
        mono: "ui-monospace",
      },
      fontSize: {
        h1: 32,
        h2: 24,
        h3: 20,
        body: 16,
        bodyStrong: 16,
        caption: 12,
        label: 14,
      },
      lineHeight: {
        h1: 40,
        h2: 32,
        h3: 28,
        body: 24,
        caption: 16,
        label: 20,
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },

  dark: {
    color: {
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
    typography: {
      // mismo scale; puedes ajustar después si quieres
      fontFamily: {
        base: "System",
        mono: "ui-monospace",
      },
      fontSize: {
        h1: 32,
        h2: 24,
        h3: 20,
        body: 16,
        bodyStrong: 16,
        caption: 12,
        label: 14,
      },
      lineHeight: {
        h1: 40,
        h2: 32,
        h3: 28,
        body: 24,
        caption: 16,
        label: 20,
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
};
