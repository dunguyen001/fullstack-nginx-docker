import { sveltekit } from '@sveltejs/kit/vite';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	preview: {
		port: process.env.PORT || 3000,
		host: process.env.HOST || "0.0.0.0"
	}
};

export default config;
