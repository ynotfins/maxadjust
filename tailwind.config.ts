import type { Config } from "tailwindcss";
import { heroui } from "@heroui/theme";
import typography from "@tailwindcss/typography";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#efcd48",
                secondary: "#efcd48",
            },
            spacing: {
                sm: "8px",
                md: "16px",
                base: "28px",
                lg: "32px",
                xl: "48px",
                "2xl": "64px",
                "3xl": "80px",
                "4xl": "100px",
                "5xl": "124px",
                "6xl": "160px",
                "7xl": "190px",
                "8xl": "225px",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem", // Default padding for mobile (16px)
                    sm: "2rem", // Small devices and up (32px)
                    lg: "4rem", // Large devices and up (64px)
                    xl: "5rem", // Extra-large devices and up (80px)
                },
            },
            animation: {
                "infinite-scroll": "infinite-scroll 25s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [heroui(), typography()],
} satisfies Config;
