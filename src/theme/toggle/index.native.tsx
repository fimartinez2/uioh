import { Pressable, Text } from "react-native";
import { useColorMode, useTheme } from "../theme-context";

export type ColorModeToggleProps = {
  label?: string;
};

export function ColorModeToggle({ label }: ColorModeToggleProps) {
  const { mode, toggle } = useColorMode();
  const t = useTheme();

  return (
    <Pressable
      onPress={toggle}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: t.color.border.default,
        backgroundColor: t.color.bg.surface,
        alignSelf: "flex-start",
      }}
    >
      <Text style={{ color: t.color.text.primary, fontWeight: "600" }}>
        {label ?? (mode === "light" ? "Switch to Dark" : "Switch to Light")}
      </Text>
    </Pressable>
  );
}
