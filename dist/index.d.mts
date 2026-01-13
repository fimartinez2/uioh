import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type ColorTokens = {
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
type TypographyTokens = {
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
type DesignTokens = {
    color: ColorTokens;
    typography: TypographyTokens;
};
type ThemeMode = "light" | "dark";

type UiOhTheme = DesignTokens;
type UiOhProviderProps = {
    /** Controlled */
    mode?: ThemeMode;
    /** Uncontrolled */
    defaultMode?: ThemeMode;
    /** Notifica cambios (controlled o uncontrolled) */
    onModeChange?: (mode: ThemeMode) => void;
    theme?: Partial<UiOhTheme>;
    children: React.ReactNode;
};
type ColorModeContextValue = {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
    toggle: () => void;
};
declare function UiOhProvider({ mode, defaultMode, onModeChange, theme, children, }: UiOhProviderProps): react_jsx_runtime.JSX.Element;
declare function useTheme(): UiOhTheme;
declare function useColorMode(): ColorModeContextValue;

type ColorModeToggleProps = {
    label?: string;
};
declare function ColorModeToggle({ label }: ColorModeToggleProps): react_jsx_runtime.JSX.Element;

type TextVariant = "body" | "bodyStrong" | "caption" | "label";
type HeadingVariant = "h1" | "h2" | "h3";
type TextColor = "text.primary" | "text.muted" | "text.inverse" | "text.brand";
type TextAlign = "left" | "center" | "right";

type TextProps = {
    children: React.ReactNode;
    variant?: TextVariant;
    color?: TextColor;
    align?: TextAlign;
    truncate?: boolean;
    as?: "span" | "p" | "div";
    className?: string;
    style?: React.CSSProperties;
};
declare function Text({ children, variant, color, align, truncate, as, className, style, }: TextProps): React.DetailedReactHTMLElement<{
    className: string | undefined;
    style: React.CSSProperties;
}, HTMLElement>;
type HeadingProps = {
    children: React.ReactNode;
    variant?: HeadingVariant;
    color?: TextColor;
    align?: TextAlign;
    as?: "h1" | "h2" | "h3";
    className?: string;
    style?: React.CSSProperties;
};
declare function Heading({ children, variant, color, align, as, className, style, }: HeadingProps): React.DetailedReactHTMLElement<{
    className: string | undefined;
    style: React.CSSProperties;
}, HTMLElement>;

export { ColorModeToggle, Heading, Text, UiOhProvider, useColorMode, useTheme };
