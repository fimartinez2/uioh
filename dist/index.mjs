import * as React from 'react';
import { jsx } from 'react/jsx-runtime';

// src/theme/theme-context.tsx

// src/tokens/theme.ts
var tokensByMode = {
  light: {
    color: {
      text: {
        primary: "#111827",
        muted: "#6B7280",
        inverse: "#FFFFFF",
        brand: "#2563EB"
      },
      bg: {
        canvas: "#FFFFFF",
        surface: "#F9FAFB"
      },
      border: {
        default: "#E5E7EB"
      }
    },
    typography: {
      fontFamily: {
        base: "System",
        mono: "ui-monospace"
      },
      fontSize: {
        h1: 32,
        h2: 24,
        h3: 20,
        body: 16,
        bodyStrong: 16,
        caption: 12,
        label: 14
      },
      lineHeight: {
        h1: 40,
        h2: 32,
        h3: 28,
        body: 24,
        caption: 16,
        label: 20
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      }
    }
  },
  dark: {
    color: {
      text: {
        primary: "#F9FAFB",
        muted: "#9CA3AF",
        inverse: "#111827",
        brand: "#60A5FA"
      },
      bg: {
        canvas: "#0B1220",
        surface: "#111827"
      },
      border: {
        default: "#1F2937"
      }
    },
    typography: {
      // mismo scale; puedes ajustar después si quieres
      fontFamily: {
        base: "System",
        mono: "ui-monospace"
      },
      fontSize: {
        h1: 32,
        h2: 24,
        h3: 20,
        body: 16,
        bodyStrong: 16,
        caption: 12,
        label: 14
      },
      lineHeight: {
        h1: 40,
        h2: 32,
        h3: 28,
        body: 24,
        caption: 16,
        label: 20
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      }
    }
  }
};
function deepMerge(base, override) {
  if (!override) return base;
  const out = Array.isArray(base) ? [...base] : { ...base };
  for (const key of Object.keys(override)) {
    const baseVal = base[key];
    const overVal = override[key];
    if (baseVal && overVal && typeof baseVal === "object" && typeof overVal === "object" && !Array.isArray(baseVal) && !Array.isArray(overVal)) {
      out[key] = deepMerge(baseVal, overVal);
    } else if (overVal !== void 0) {
      out[key] = overVal;
    }
  }
  return out;
}
var ThemeContext = React.createContext(null);
var ColorModeContext = React.createContext(
  null
);
function UiOhProvider({
  mode,
  defaultMode = "light",
  onModeChange,
  theme,
  children
}) {
  const isControlled = mode !== void 0;
  const [internalMode, setInternalMode] = React.useState(defaultMode);
  const currentMode = isControlled ? mode : internalMode;
  const setMode = React.useCallback(
    (next) => {
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
  const colorModeValue = React.useMemo(
    () => ({ mode: currentMode, setMode, toggle }),
    [currentMode, setMode, toggle]
  );
  return /* @__PURE__ */ jsx(ColorModeContext.Provider, { value: colorModeValue, children: /* @__PURE__ */ jsx(ThemeContext.Provider, { value: themeValue, children }) });
}
function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <UiOhProvider />");
  return ctx;
}
function useColorMode() {
  const ctx = React.useContext(ColorModeContext);
  if (!ctx)
    throw new Error("useColorMode must be used within <UiOhProvider />");
  return ctx;
}
function ColorModeToggle({ label }) {
  const { mode, toggle } = useColorMode();
  const t = useTheme();
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: toggle,
      style: {
        padding: "10px 12px",
        borderRadius: 10,
        border: `1px solid ${t.color.border.default}`,
        background: t.color.bg.surface,
        color: t.color.text.primary,
        cursor: "pointer",
        width: "fit-content"
      },
      children: label ?? (mode === "light" ? "Switch to Dark" : "Switch to Light")
    }
  );
}

// src/typography/core/colors.ts
function resolveTextColor(t, color) {
  const [, key] = color.split(".");
  return t.color.text[key];
}

// src/typography/core/variant-styles.ts
function getTextStyle(t, variant) {
  const typo = t.typography;
  switch (variant) {
    case "bodyStrong":
      return {
        fontSize: typo.fontSize.bodyStrong,
        lineHeight: typo.lineHeight.body,
        fontWeight: typo.fontWeight.semibold,
        fontFamily: typo.fontFamily.base
      };
    case "caption":
      return {
        fontSize: typo.fontSize.caption,
        lineHeight: typo.lineHeight.caption,
        fontWeight: typo.fontWeight.regular,
        fontFamily: typo.fontFamily.base
      };
    case "label":
      return {
        fontSize: typo.fontSize.label,
        lineHeight: typo.lineHeight.label,
        fontWeight: typo.fontWeight.medium,
        fontFamily: typo.fontFamily.base
      };
    case "body":
    default:
      return {
        fontSize: typo.fontSize.body,
        lineHeight: typo.lineHeight.body,
        fontWeight: typo.fontWeight.regular,
        fontFamily: typo.fontFamily.base
      };
  }
}
function getHeadingStyle(t, variant) {
  const typo = t.typography;
  switch (variant) {
    case "h1":
      return {
        fontSize: typo.fontSize.h1,
        lineHeight: typo.lineHeight.h1,
        fontWeight: typo.fontWeight.bold,
        fontFamily: typo.fontFamily.base
      };
    case "h2":
      return {
        fontSize: typo.fontSize.h2,
        lineHeight: typo.lineHeight.h2,
        fontWeight: typo.fontWeight.bold,
        fontFamily: typo.fontFamily.base
      };
    case "h3":
    default:
      return {
        fontSize: typo.fontSize.h3,
        lineHeight: typo.lineHeight.h3,
        fontWeight: typo.fontWeight.semibold,
        fontFamily: typo.fontFamily.base
      };
  }
}
function Text({
  children,
  variant = "body",
  color = "text.primary",
  align = "left",
  truncate,
  as = "p",
  className,
  style
}) {
  const t = useTheme();
  const v = getTextStyle(t, variant);
  const finalStyle = {
    margin: 0,
    color: resolveTextColor(t, color),
    textAlign: align,
    fontSize: v.fontSize,
    lineHeight: `${v.lineHeight}px`,
    fontWeight: v.fontWeight,
    fontFamily: v.fontFamily,
    ...truncate ? {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    } : null,
    ...style
  };
  return React.createElement(as, { className, style: finalStyle }, children);
}
function Heading({
  children,
  variant = "h1",
  color = "text.primary",
  align = "left",
  as,
  className,
  style
}) {
  const t = useTheme();
  const v = getHeadingStyle(t, variant);
  const tag = as ?? variant;
  const finalStyle = {
    margin: 0,
    color: resolveTextColor(t, color),
    textAlign: align,
    fontSize: v.fontSize,
    lineHeight: `${v.lineHeight}px`,
    fontWeight: v.fontWeight,
    fontFamily: v.fontFamily,
    ...style
  };
  return React.createElement(tag, { className, style: finalStyle }, children);
}

export { ColorModeToggle, Heading, Text, UiOhProvider, useColorMode, useTheme };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map