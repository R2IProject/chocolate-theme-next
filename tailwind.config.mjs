/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btn: "#846a61",
        btn_hover: "#53423c",
      },
      screens: {
        w1536: "1536px",
        w1280: "1280px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
