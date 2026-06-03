// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 替換成你的實際 GitHub Pages 網址
  site: 'https://www.shimazu.ndjp.net',
  vite: {
    plugins: [tailwindcss()],
  },
});


