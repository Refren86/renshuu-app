import path from "path";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/index.ts",
      exportName: "app",
      tsCompiler: "esbuild",
    }),
  ],
  server: {
    port: 5000,
    host: "0.0.0.0",
  },
  assetsInclude: ["**/*.graphql"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
