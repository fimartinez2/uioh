import * as React from "react";
import { View, type ViewStyle } from "react-native";
import { useTheme } from "../theme/theme-context";

export type CanvasBackgroundProps = {
  zIndex?: number;
  style?: ViewStyle;
};

export function CanvasBackground({
  zIndex = -1,
  style,
}: CanvasBackgroundProps) {
  const t = useTheme();

  return (
    <View
      pointerEvents="none"
      style={[
        {
          position: "absolute",
          backgroundColor: t.color.bg.canvas,
          zIndex,
        },
        style,
      ]}
    />
  );
}
