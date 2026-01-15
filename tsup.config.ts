import { defineConfig, type Options } from "tsup";

const shared: Options = {
  entry: ["src/index.ts"],
  sourcemap: true,
  splitting: false,
  treeshake: true,
  target: "es2020",
  external: ["react", "react-native"],
  outExtension({ format }) {
    return {
      js: format === "esm" ? ".js" : ".cjs",
    };
  },
};

export default defineConfig([
  {
    ...shared,
    format: ["esm", "cjs"],
    outDir: "dist/web",
    clean: true,
    esbuildOptions(options) {
      options.resolveExtensions = [".tsx", ".ts", ".js"];
    },
  },
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
    },
  },
  {
    ...shared,
    format: ["esm"],
    dts: {
      only: true,
    },
    outDir: "dist",
  },
]);
