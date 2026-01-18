/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {animation: {
      "fade-in": "fadeIn 0.8s ease-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "scale(0.98)" },
        "100%": { opacity: 1, transform: "scale(1)" },
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      pacifico:["Pacifico", 'cursive'],
      gorditas:["Gorditas", 'serif'],
      alata:["Alata", 'sans-serif'],

    },
  },
  },
  plugins: [],
}
