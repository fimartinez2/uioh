import * as React from "react";
import { tokensByMode, type DesignTokens, type ThemeMode } from "@tokens";

export type UiOhTheme = DesignTokens;

export type UiOhProviderProps = {
  mode?: ThemeMode;
  defaultMode?: ThemeMode;
  onModeChange?: (mode: ThemeMode) => void;
  theme?: Partial<UiOhTheme>;
  children: React.ReactNode;
};

type ColorModeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
};

const ThemeContext = React.createContext<UiOhTheme | null>(null);
const ColorModeContext = React.createContext<ColorModeContextValue | null>(
  null
);

export function UiOhProvider({
  mode,
  defaultMode = "light",
  onModeChange,
  theme,
  children,
}: UiOhProviderProps) {
  const isControlled = mode !== undefined;
  const [internalMode, setInternalMode] =
    React.useState<ThemeMode>(defaultMode);

  const currentMode = isControlled ? mode! : internalMode;

  const setMode = React.useCallback(
    (next: ThemeMode) => {
      if (!isControlled) setInternalMode(next);
      onModeChange?.(next);
    },
    [isControlled, onModeChange]
  );

  const toggle = React.useCallback(() => {
    setMode(currentMode === "light" ? "dark" : "light");
  }, [currentMode, setMode]);

  const themeValue = React.useMemo(() => {
    const base = tokensByMode[currentMode];
    return deepMerge(base, theme);
  }, [currentMode, theme]);

  const colorModeValue = React.useMemo<ColorModeContextValue>(
    () => ({ mode: currentMode, setMode, toggle }),
    [currentMode, setMode, toggle]
  );

  return (
    <ColorModeContext.Provider value={colorModeValue}>
      <ThemeContext.Provider value={themeValue}>
        {children}
      </ThemeContext.Provider>
    </ColorModeContext.Provider>
  );
}

export function useTheme(): UiOhTheme {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <UiOhProvider />");
  return ctx;
}

export function useColorMode(): ColorModeContextValue {
  const ctx = React.useContext(ColorModeContext);
  if (!ctx)
    throw new Error("useColorMode must be used within <UiOhProvider />");
  return ctx;
}

export type { ThemeMode };
