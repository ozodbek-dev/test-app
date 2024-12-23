import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path'
// Simulate __dirname

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			"shared": path.resolve(__dirname, "./src/shared"),
			"pages": path.resolve(__dirname, "./src/pages"),
			"styles": path.resolve(__dirname, "./src/styles"),
			"features": path.resolve(__dirname, "./src/features"),
			"providers": path.resolve(__dirname, "./src/providers"),
			"widgets": path.resolve(__dirname, "./src/widgets"),
			"routes": path.resolve(__dirname, "./src/routes"),
			"containers": path.resolve(__dirname, "./src/containers"),
			"assets": path.resolve(__dirname, "./src/assets"),
		},
	},
});
