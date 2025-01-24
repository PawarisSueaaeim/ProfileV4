import type { Config } from "tailwindcss";
import {
    COLOR_PRIMARY,
    COLOR_QUATERNARY,
    COLOR_SECONDARY,
    COLOR_TERTIARY,
} from "./constants/COLORS";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                COLOR_PRIMARY: COLOR_PRIMARY,
                COLOR_SECONDARY: COLOR_SECONDARY,
                COLOR_TERTIARY: COLOR_TERTIARY,
                COLOR_QUATERNARY: COLOR_QUATERNARY,
            },
            boxShadow: {
                intense: "2px 5px 10px 2px rgba(0,0,0,0.2)",
            },
        },
    },
    plugins: [],
} satisfies Config;
