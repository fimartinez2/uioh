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

export const typographyTokens: TypographyTokens = {
  fontFamily: {
    base: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
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
};
