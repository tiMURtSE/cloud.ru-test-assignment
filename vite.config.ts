import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: /^@components/, replacement: "/src/components" },
			{ find: /^@pages/, replacement: "/src/pages" },
			{ find: /^@styles/, replacement: "/src/styles" },
			{ find: /^@hooks/, replacement: "/src/hooks" },
			{ find: /^@consts/, replacement: "/src/consts" },
			{ find: /^@store/, replacement: "/src/store" },
			{ find: /^@api/, replacement: "/src/api" },
		],
	},
});
