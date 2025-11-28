import createMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
    output: "standalone",
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});

const withPWA = withPWAInit({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
});

export default withPWA(withContentCollections(withMDX(nextConfig)));
