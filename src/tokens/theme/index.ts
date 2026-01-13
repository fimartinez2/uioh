import type { ColorTokens, ThemeMode } from "./colors";
import { colorsByMode } from "./colors";

import type { TypographyTokens } from "../components/typography";
import { typographyTokens } from "../components/typography";

export type DesignTokens = {
  color: ColorTokens;
  typography: TypographyTokens;
};

export { type ThemeMode } from "./colors";

export const tokensByMode: Record<ThemeMode, DesignTokens> = {
  light: {
    color: colorsByMode.light,
    typography: typographyTokens,
  },
  dark: {
    color: colorsByMode.dark,
    typography: typographyTokens,
  },
};
