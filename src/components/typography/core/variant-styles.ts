import type { UiOhTheme } from "@theme";
import type { HeadingVariant, TextVariant } from "./types";

export function getTextStyle(t: UiOhTheme, variant: TextVariant) {
  const typo = t.typography;

  switch (variant) {
    case "bodyStrong":
      return {
        fontSize: typo.fontSize.bodyStrong,
        lineHeight: typo.lineHeight.body,
        fontWeight: typo.fontWeight.semibold,
        fontFamily: typo.fontFamily.base,
      };
    case "caption":
      return {
        fontSize: typo.fontSize.caption,
        lineHeight: typo.lineHeight.caption,
        fontWeight: typo.fontWeight.regular,
        fontFamily: typo.fontFamily.base,
      };
    case "label":
      return {
        fontSize: typo.fontSize.label,
        lineHeight: typo.lineHeight.label,
        fontWeight: typo.fontWeight.medium,
        fontFamily: typo.fontFamily.base,
      };
    case "body":
    default:
      return {
        fontSize: typo.fontSize.body,
        lineHeight: typo.lineHeight.body,
        fontWeight: typo.fontWeight.regular,
        fontFamily: typo.fontFamily.base,
      };
  }
}

export function getHeadingStyle(t: UiOhTheme, variant: HeadingVariant) {
  const typo = t.typography;

  switch (variant) {
    case "h1":
      return {
        fontSize: typo.fontSize.h1,
        lineHeight: typo.lineHeight.h1,
        fontWeight: typo.fontWeight.bold,
        fontFamily: typo.fontFamily.base,
      };
    case "h2":
      return {
        fontSize: typo.fontSize.h2,
        lineHeight: typo.lineHeight.h2,
        fontWeight: typo.fontWeight.bold,
        fontFamily: typo.fontFamily.base,
      };
    case "h3":
    default:
      return {
        fontSize: typo.fontSize.h3,
        lineHeight: typo.lineHeight.h3,
        fontWeight: typo.fontWeight.semibold,
        fontFamily: typo.fontFamily.base,
      };
  }
}
