import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    faster: "src/components/index.ts"
  },
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs.js" : ".es.js"
    };
  }
});
