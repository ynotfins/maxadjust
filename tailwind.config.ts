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
        // Mobile-first breakpoints
        screens: {
            sm: "640px",
            md: "768px", // Tablet starts here (still uses mobile nav)
            lg: "1024px", // Desktop starts here
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            // Mobile-first color system (from business app)
            colors: {
                background: "#FFFFFF",
                foreground: "#212121",
                primary: {
                    DEFAULT: "#2196F3",
                    light: "#64B5F6",
                    dark: "#1976D2",
                },
                danger: {
                    DEFAULT: "#F44336",
                    light: "#EF5350",
                    dark: "#D32F2F",
                },
                success: {
                    DEFAULT: "#4CAF50",
                    light: "#66BB6A",
                    dark: "#388E3C",
                },
                gray: {
                    50: "#FAFAFA",
                    100: "#F5F5F5",
                    200: "#EEEEEE",
                    300: "#E0E0E0",
                    400: "#BDBDBD",
                    500: "#9E9E9E",
                    600: "#757575",
                    700: "#616161",
                    800: "#424242",
                    900: "#212121",
                },
            },
            // Mobile-optimized spacing scale
            spacing: {
                sm: "8px",
                md: "16px",
                base: "24px",
                lg: "32px",
                xl: "48px",
                "2xl": "64px",
                "3xl": "80px",
                "4xl": "96px",
            },
            // Mobile-first container
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem", // 16px mobile
                    sm: "1.5rem", // 24px
                    md: "2rem", // 32px tablet
                    lg: "3rem", // 48px desktop
                    xl: "4rem", // 64px
                },
            },
            // Mobile-friendly font sizes
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.25rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            },
            // Border radius for clean cards
            borderRadius: {
                sm: "0.375rem", // 6px
                DEFAULT: "0.5rem", // 8px
                md: "0.75rem", // 12px
                lg: "1rem", // 16px
                xl: "1.5rem", // 24px
                "2xl": "2rem", // 32px
            },
            // Box shadows for cards
            boxShadow: {
                sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                DEFAULT: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
                md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            },
        },
    },
    plugins: [heroui(), typography()],
} satisfies Config;
