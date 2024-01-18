import * as path from "node:path";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

function isExternal(id: string) {
  return !id.startsWith(".") && !path.isAbsolute(id);
}

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    target: "node20",
    outDir: "server-build",
    lib: {
      entry: "server.ts",
      formats: ["es"],
      fileName: "server",
    },
    rollupOptions: {
      external: isExternal,
    },
  },
});
