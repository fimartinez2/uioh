import * as React from "react";
import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import { useTheme } from "@theme";
import type {
  HeadingVariant,
  TextAlign,
  TextColor,
  TextVariant,
} from "./core/types";
import { resolveColor } from "@core";
import { getHeadingStyle, getTextStyle } from "./core/variant-styles";

export type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  numberOfLines?: number;
  style?: RNTextProps["style"];
};

export function Text({
  children,
  variant = "body",
  color = "text.primary",
  align = "left",
  numberOfLines,
  style,
}: TextProps) {
  const t = useTheme();
  const v = getTextStyle(t, variant);

  return (
    <RNText
      numberOfLines={numberOfLines}
      style={[
        {
          color: resolveColor(t, color),
          textAlign: align,
          fontSize: v.fontSize,
          lineHeight: v.lineHeight,
          fontWeight: v.fontWeight,
          fontFamily: v.fontFamily,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
}

export type HeadingProps = {
  children: React.ReactNode;
  variant?: HeadingVariant;
  color?: TextColor;
  align?: TextAlign;
  numberOfLines?: number;
  style?: RNTextProps["style"];
};

export function Heading({
  children,
  variant = "h1",
  color = "text.primary",
  align = "left",
  numberOfLines,
  style,
}: HeadingProps) {
  const t = useTheme();
  const v = getHeadingStyle(t, variant);

  return (
    <RNText
      numberOfLines={numberOfLines}
      style={[
        {
          color: resolveColor(t, color),
          textAlign: align,
          fontSize: v.fontSize,
          lineHeight: v.lineHeight,
          fontWeight: v.fontWeight,
          fontFamily: v.fontFamily,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
}

export function Label(props: Omit<TextProps, "variant">) {
  return <Text {...props} variant="label" />;
}

export function Caption(props: Omit<TextProps, "variant">) {
  return <Text {...props} variant="caption" />;
}
