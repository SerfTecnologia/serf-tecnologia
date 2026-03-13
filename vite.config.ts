import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import fs from "node:fs";
import path from "node:path";

// =============================================================================
// Manus Debug Collector
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const payload = JSON.parse(body);

            if (!fs.existsSync(LOG_DIR)) {
              fs.mkdirSync(LOG_DIR, { recursive: true });
            }

            const logFile = path.join(LOG_DIR, "browser.log");

            fs.appendFileSync(
              logFile,
              `[${new Date().toISOString()}] ${JSON.stringify(payload)}\n`
            );

            res.writeHead(200);
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.writeHead(400);
            res.end(JSON.stringify({ error: String(e) }));
          }
        });
      });
    },
  };
}

// =============================================================================
// Vite Config
// =============================================================================

export default defineConfig({
  base: "/serf-tecnologia/",

  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
    vitePluginManusDebugCollector(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client/src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },

  root: path.resolve(PROJECT_ROOT, "client"),

build: {
  outDir: "dist/public",
  emptyOutDir: true,
  },
  

  server: {
    port: 3000,
    host: true,
  },
});
