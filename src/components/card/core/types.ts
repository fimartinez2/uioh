import type * as React from "react";

export type CardProps = {
  children: React.ReactNode;
  style?: any;
};

export type CardHeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  right?: React.ReactNode;
};

export type CardSectionProps = {
  children: React.ReactNode;
  style?: any;
};
