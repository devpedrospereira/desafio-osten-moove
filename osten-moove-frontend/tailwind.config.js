/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                green: {
                    300: "#00B37E",
                },
                blue: {
                    100: "#F4F8F9",
                    700: "#112E5C",
                },
                red: {
                    500: "#F75A68",
                },
                gray: {
                    100: "#E6E6E6",
                    300: "#A1A1A1",
                    600: "#302D2D",
                },
            },
        },
    },
    plugins: [],
};
