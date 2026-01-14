import * as React from "react";
import { Text, Pressable, Linking } from "react-native";
import { useTheme } from "../../theme";
import { resolveColor } from "@core";
import type { LinkProps } from "./core/types";

export function Link({
  href,
  children,
  color = "text.brand",
  underline = true,
}: LinkProps) {
  const t = useTheme();

  return (
    <Pressable onPress={() => Linking.openURL(href)}>
      <Text
        style={{
          color: resolveColor(t, color),
          textDecorationLine: underline ? "underline" : "none",
          fontWeight: t.typography.fontWeight.medium,
          fontFamily: t.typography.fontFamily.base,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
