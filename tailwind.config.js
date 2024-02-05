/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            serif: ["Raleway", "sans-serif"],
        },
        extend: {
            boxShadow: {
                "header_shadow": "0 20px 30px -15px rgba(0, 0, 0, 0.5)",
            },
        },
    },
    plugins: [],
};
