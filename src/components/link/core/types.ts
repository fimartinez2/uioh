import type { ColorPath } from "@core";

export type LinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  color?: ColorPath;
  underline?: boolean;
};
