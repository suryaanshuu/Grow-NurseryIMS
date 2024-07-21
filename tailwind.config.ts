// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},

    colors: {
      'green': {
        1: '#659e38',
        2: '#8c9d3d',
        3: '#628b61',
        4: '#ccdec4'
      },
      'gray': {
        900: '#18181b',
        1000: '#52525b',
      },
      
      'white': '#ffffff',
      'black': '#000000',
      'yellow': {
        2: '#FFFF00',
        1: '#FCF55F'},
    }
  },
  variants: {},
  plugins: [],
};