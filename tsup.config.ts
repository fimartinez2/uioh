import { defineConfig, type Options } from "tsup";

const shared: Options = {
  entry: ["src/index.ts"],
  sourcemap: true,
  splitting: false,
  treeshake: true,
  target: "es2020",
  external: ["react", "react-native"],
};

export default defineConfig([
  // WEB BUILD
  {
    ...shared,
    format: ["esm", "cjs"],
    outDir: "dist/web",
    clean: true,
    esbuildOptions(options) {
      options.resolveExtensions = [".tsx", ".ts", ".js"];
      options.alias = { "@components": "./src/components" };
    },
  },

  // NATIVE BUILD
  {
    ...shared,
    format: ["esm", "cjs"],
    outDir: "dist/native",
    clean: false,
    esbuildOptions(options) {
      options.resolveExtensions = [
        ".native.tsx",
        ".native.ts",
        ".tsx",
        ".ts",
        ".js",
      ];
      options.alias = { "@components": "./src/components" };
    },
  },
  {
    ...shared,
    format: ["esm"],
    dts: { only: true },
    outDir: "dist",
  },
]);
