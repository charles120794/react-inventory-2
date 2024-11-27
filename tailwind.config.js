import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const textShadow = require("tailwindcss-textshadow");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            transitionDelay: {
                50000: "50000ms",
            },
            animation: {
                "slide-up": "slide-up 1s ease-in-out forwards",
            },
            keyframes: {
                "slide-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(100%)", // Start from the bottom
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)", // End at the center
                    },
                },
            },
        },
    },

    plugins: [forms, textShadow],
};
