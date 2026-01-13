import { ColorPath } from "@core";

export type TextVariant = "body" | "bodyStrong" | "caption" | "label";
export type HeadingVariant = "h1" | "h2" | "h3";

export type TextColor = Extract<
  ColorPath,
  "text.primary" | "text.muted" | "text.inverse" | "text.brand"
>;

export type TextAlign = "left" | "center" | "right";
