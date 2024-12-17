import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/cart/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/dashboard/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/home/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/product/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
