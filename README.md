# UI-OH

> **One System, Every Screen.**
> A high-performance, universal design system for React and React Native.

**UI-OH** is a foundational design system built to power **Web (React / Next.js)** and **Mobile (React Native / Expo)** applications from a single codebase. It leverages platform-specific resolution logic to provide high-fidelity components on Web (HTML/CSS) and Native (View/Text) with zero configuration for the consumer.

---

## 🌐 Demos & Documentation

| Platform   | Tech Stack    | Live Demo                                         | Source Code                                               |
| :--------- | :------------ | :------------------------------------------------ | :-------------------------------------------------------- |
| **Web**    | Next.js 15+   | [View Demo ↗](https://uioh-next-demo.vercel.app/) | [GitHub ↗](https://github.com/fimartinez2/uioh-next-demo) |
| **Mobile** | Expo / Router | [Scan QR ↗](https://example-expo-demo.com)        | [GitHub ↗](https://github.com/fimartinez2/uioh-expo-demo) |

---

## ✨ Key Features

- **🎯 Single Source of Truth:** Centralized tokens for colors, spacing, and typography.
- **🌗 Native Theming:** Built-in Light/Dark mode with a unified `useTheme` hook.
- **🔄 Platform Parity:** Use `<Heading>` on Web (renders `<h2>`) and Native (renders `<Text>`) with the exact same API.
- **⚡ Performance First:** Optimized for tree-shaking and zero-runtime overhead.
- **TypeScript First:** Deeply typed tokens and components for a superior DX.

## 📦 Installation

```bash
npm install uioh
```

## 🧱 Usage

### Wrap your app

```tsx
import { UiOhProvider } from "uioh";

export default function RootLayout({ children }) {
  return <UiOhProvider defaultMode="light">{children}</UiOhProvider>;
}
```

### Use components

```tsx
import { Heading, Text, ColorModeToggle, useTheme } from "uioh";
```

## 🧠 Theming

```tsx
const t = useTheme();
t.color.bg.canvas;
```
