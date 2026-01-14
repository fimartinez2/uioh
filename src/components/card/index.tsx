"use client";

import * as React from "react";
import { useTheme } from "@theme";
import { Heading, Text } from "@components/typography";
import { getCardStyles } from "./core/styles";
import type {
  CardHeaderProps,
  CardProps,
  CardSectionProps,
} from "./core/types";

export function Card({ children, style }: CardProps) {
  const t = useTheme();
  const s = getCardStyles(t);

  return (
    <div
      style={{
        background: s.container.backgroundColor,
        border: `1px solid ${s.container.borderColor}`,
        borderRadius: s.container.borderRadius,
        padding: s.container.padding,
        display: "grid",
        gap: s.container.gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, right }: CardHeaderProps) {
  const t = useTheme();

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div style={{ flex: 1, display: "grid", gap: 4 }}>
        <Heading variant="h3" as="h3">
          {title}
        </Heading>
        {subtitle ? (
          <Text color="text.muted" as="p">
            {subtitle}
          </Text>
        ) : null}
      </div>
      {right ? <div>{right}</div> : null}
    </div>
  );
}

export function CardDivider() {
  const t = useTheme();
  return <div style={{ borderTop: `1px solid ${t.color.border.default}` }} />;
}

export function CardContent({ children, style }: CardSectionProps) {
  return <div style={style}>{children}</div>;
}
