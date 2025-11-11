import createMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
    output: "standalone",
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});

// PWA Configuration
const pwaConfig = withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});

export default withContentCollections(withMDX(pwaConfig(nextConfig)));
