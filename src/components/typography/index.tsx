"use client";

import * as React from "react";

import type {
  HeadingVariant,
  TextAlign,
  TextColor,
  TextVariant,
} from "./core/types";

import { getHeadingStyle, getTextStyle } from "./core/variant-styles";
import { useTheme } from "@theme";
import { resolveColor } from "@core";

export type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  truncate?: boolean;
  as?: "span" | "p" | "div";
  className?: string;
  style?: React.CSSProperties;
};

export function Text({
  children,
  variant = "body",
  color = "text.primary",
  align = "left",
  truncate,
  as = "p",
  className,
  style,
}: TextProps) {
  const t = useTheme();
  const v = getTextStyle(t, variant);

  const finalStyle: React.CSSProperties = {
    margin: 0,
    color: resolveColor(t, color),
    textAlign: align,
    fontSize: v.fontSize,
    lineHeight: `${v.lineHeight}px`,
    fontWeight: v.fontWeight as any,
    fontFamily: v.fontFamily,
    ...(truncate
      ? {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }
      : null),
    ...style,
  };

  return React.createElement(as, { className, style: finalStyle }, children);
}

export type HeadingProps = {
  children: React.ReactNode;
  variant?: HeadingVariant;
  color?: TextColor;
  align?: TextAlign;
  as?: "h1" | "h2" | "h3";
  className?: string;
  style?: React.CSSProperties;
};

export function Heading({
  children,
  variant = "h1",
  color = "text.primary",
  align = "left",
  as,
  className,
  style,
}: HeadingProps) {
  const t = useTheme();
  const v = getHeadingStyle(t, variant);

  const tag = as ?? (variant as "h1" | "h2" | "h3");

  const finalStyle: React.CSSProperties = {
    margin: 0,
    color: resolveColor(t, color),
    textAlign: align,
    fontSize: v.fontSize,
    lineHeight: `${v.lineHeight}px`,
    fontWeight: v.fontWeight as any,
    fontFamily: v.fontFamily,
    ...style,
  };

  return React.createElement(tag, { className, style: finalStyle }, children);
}

export function Label(props: Omit<TextProps, "variant">) {
  return <Text {...props} variant="label" as={props.as ?? "span"} />;
}

export function Caption(props: Omit<TextProps, "variant">) {
  return <Text {...props} variant="caption" as={props.as ?? "span"} />;
}
