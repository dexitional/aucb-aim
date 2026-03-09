import { devtools } from '@tanstack/devtools-vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
//import { nitro } from 'nitro/vite'

const config = defineConfig({
  server: {
    cors: {
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
    },
  },
  plugins: [
    devtools(),
    // nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          crawlLinks: true,
          outputPath: "index.html",
        },
      },
    }),
    viteReact()
  ],
  build: {
    outDir: "dist",
  },
})

export default config


