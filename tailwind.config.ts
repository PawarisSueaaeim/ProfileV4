import type { Config } from "tailwindcss";
import {
    COLOR_PRIMARY,
    COLOR_QUATERNARY,
    COLOR_SECONDARY,
    COLOR_TERTIARY,
    DARK_BLACK,
    DARK_GRAY,
    DARK_GREEN,
    DARK_WHITE,
} from "./constants/COLORS";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./common/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                COLOR_PRIMARY: COLOR_PRIMARY,
                COLOR_SECONDARY: COLOR_SECONDARY,
                COLOR_TERTIARY: COLOR_TERTIARY,
                COLOR_QUATERNARY: COLOR_QUATERNARY,
                DARK_BLACK: DARK_BLACK,
                DARK_GRAY: DARK_GRAY,
                DARK_GREEN: DARK_GREEN,
                DARK_WHITE: DARK_WHITE,
            },
            keyframes: {
                spin: {
                    from: {
                        transform: "rotate(0deg)",
                    },
                    to: {
                        transform: "rotate(360deg)",
                    },
                },
            },
            animation: {
                spin: "spin 3s linear infinite",
            },
        },
    },
    plugins: [],
    darkMode: "class",
} satisfies Config;
