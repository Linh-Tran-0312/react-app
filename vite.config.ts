import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths  from "vite-tsconfig-paths";
import dynamicPrefetch from 'vite-plugin-dynamic-prefetch';
// import dynamicPrefetch from './vite-prefetchPlugin'
import path from "path";
 
export default defineConfig({
  plugins: [react(), 
    tsConfigPaths({configNames: ['tsconfig.app.json']}),
    dynamicPrefetch()],
  base: 'public',
  resolve: {
    alias:[
      { find: 'pages', replacement: path.resolve(__dirname,'src/pages/' )},
      { find: /^components/, replacement: path.resolve(__dirname,'src/components') },
      { find: 'utils', replacement: path.resolve(__dirname,'src/utils') }
    ]
  },
  build: {
    minify: true,
    sourcemap: true,
    outDir: "dist",
    rollupOptions: {
      plugins: [],
      // external: ['fs', 'path', 'os', 'crypto']
    },
  },
});
