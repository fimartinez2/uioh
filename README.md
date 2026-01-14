# UI-OH

> Cross-platform Design System for React & React Native

**UI-OH** is a foundational Design System built to power **both Web (React / Next.js)** and **Mobile (React Native / Expo)** applications from a **single source of truth**.

It provides:

- 🎨 Centralized **design tokens**
- 🧠 A powerful **theming system** with light/dark mode
- 🧩 Reusable **UI components**
- 🖥️ + 📱 **Web & Native parity**
- 📦 Distributed as a single **NPM package**

## ✨ Features

- One design system → many platforms
- Light / Dark mode out of the box
- Centralized design tokens (colors, typography, spacing, etc.)
- Same API on Web and Native
- Built with scalability and long-term architecture in mind

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

## 🪪 License

MIT

## 🚀 Demo Highlights

### Expo (React Native)

- Token swatches visualized
- Typography scale preview
- Real device + emulator ready

### Next.js (Web)

- CSS glow effects
- Shared components with mobile
- Zero platform-specific forks
