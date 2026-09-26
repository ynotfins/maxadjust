import createMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aqfdwixvirtzccefysco.supabase.co",
                pathname: "/storage/v1/object/public/**",
            },
        ],
    },
    output: "standalone",
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    async redirects() {
        return [
            {
                source: "/privacy-policy",
                destination: "/privacy",
                permanent: true,
            },
            {
                source: "/terms-conditions",
                destination: "/terms",
                permanent: true,
            },
            {
                source: "/terms-of-service",
                destination: "/terms",
                permanent: true,
            },
        ];
    },
};

const withMDX = createMDX({});

export default withContentCollections(withMDX(nextConfig));
