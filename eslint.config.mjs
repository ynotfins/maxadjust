import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    {
        // MDX compiled at build time by scripts/generate-mdx.mjs
        ignores: ["src/generated/**", ".open-next/**"],
    },
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "react/no-unescaped-entities": "off",
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },
];

export default eslintConfig;
