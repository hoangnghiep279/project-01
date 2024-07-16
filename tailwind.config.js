/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                container: "1200px",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                "open-sans": ["Open Sans", "sans-serif"],
            },
            fontSize: {
                "4.5xl": "2.75rem",
            },
            colors: {
                primaryColor: "#3363AF",
                secondColor: "#FFB800",
            },
            backgroundImage: {
                "intro-bg": "url('./assets/imgs/intropage/intro-img4.png')",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".w-container-default": {
                    width: "calc(100% - 40px)",
                },
            });
        },
    ],
};
