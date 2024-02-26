import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	resolve: {
		alias: {
			"@lib": path.resolve(__dirname, "./src/lib"),
			"@routes": path.resolve(__dirname, "./src/routes"),
			"@static": path.resolve(__dirname, "./src/static"),
		}
	}
});