<<<<<<< HEAD
import type { UiOhTheme } from "../theme";
=======
import type { UiOhTheme } from "@theme";
>>>>>>> 6d8c13f (chore: folder restructure)

export type ColorPath =
  | "text.primary"
  | "text.muted"
  | "text.inverse"
  | "text.brand"
  | "bg.canvas"
  | "bg.surface"
  | "border.default";

export function resolveColor(t: UiOhTheme, path: ColorPath) {
  const [group, key] = path.split(".") as [keyof UiOhTheme["color"], string];

  // @ts-expect-error: el indexado está garantizado por ColorPath
  return t.color[group][key] as string;
}
