import type { UiOhTheme } from "@uioh/theme";
import type { TextColor } from "./types";

export function resolveTextColor(t: UiOhTheme, color: TextColor) {
  const [, key] = color.split(".") as [
    "text",
    keyof UiOhTheme["color"]["text"]
  ];
  return t.color.text[key];
}
