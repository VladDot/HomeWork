/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        screens: {
            xl: "1440px",
            md: "1024px",
        },
        extend: {
            gridTemplateRows: {
                layout: "auto 1fr auto",
            },
            ...defaultTheme,
            colors: {
                ...defaultTheme.colors,
                warning: "#f1388b",
                "almost-white": "hsl(0, 0%, 98%)",
                "medium-gray": "hsl(0, 0%, 41%)",
                "almost-black": "hsl(0, 0%, 8%)",
            },
        },
    },
    plugins: [],
};
