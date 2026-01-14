import * as React from "react";
import { View, type ViewStyle } from "react-native";
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

  return <View style={[s.container as ViewStyle, style]}>{children}</View>;
}

export function CardHeader({ title, subtitle, right }: CardHeaderProps) {
  const t = useTheme();
  const s = getCardStyles(t);

  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
      <View style={[s.header, { flex: 1 }]}>
        <Heading variant="h3">{title}</Heading>
        {subtitle ? <Text color="text.muted">{subtitle}</Text> : null}
      </View>
      {right ? <View>{right}</View> : null}
    </View>
  );
}

export function CardDivider() {
  const t = useTheme();
  const s = getCardStyles(t);
  return <View style={s.divider} />;
}

export function CardContent({ children, style }: CardSectionProps) {
  return <View style={style}>{children}</View>;
}
