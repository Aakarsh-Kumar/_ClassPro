import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	poweredByHeader: false,
	compress: true,

	experimental: {
		// reactCompiler: true,
		parallelServerCompiles: true,
		nextScriptWorkers: true,
		useLightningcss: true,
		turbo: {
			treeShaking: true,
		},
	},
};
export default nextConfig;
