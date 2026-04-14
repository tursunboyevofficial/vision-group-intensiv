import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "motion": ["framer-motion"],
          "icons": ["lucide-react"],
          "radix": ["@radix-ui/react-accordion", "@radix-ui/react-tabs", "@radix-ui/react-dropdown-menu", "@radix-ui/react-slot"],
        },
      },
    },
  },
})
