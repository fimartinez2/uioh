import type { UiOhTheme } from "@theme";

export function getCardStyles(t: UiOhTheme) {
  return {
    container: {
      backgroundColor: t.color.bg.surface,
      borderColor: t.color.border.default,
      borderRadius: 18,
      borderWidth: 1,
      padding: 16,
      gap: 12,
    },
    header: {
      gap: 4,
    },
    divider: {
      borderTopWidth: 1,
      borderTopColor: t.color.border.default,
      opacity: 1,
    },
  } as const;
}
