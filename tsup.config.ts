import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  splitting: false,
  treeshake: true,
  external: ["react", "react-native"],
  esbuildOptions(options) {
    options.alias = {
      "@core": "./src/core",
      "@tokens": "./src/tokens",
      "@theme": "./src/theme",
      "@components": "./src/components",
    };
  },
});
