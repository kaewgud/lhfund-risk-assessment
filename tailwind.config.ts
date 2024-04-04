import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from '@nextui-org/theme'

export default {
  content: ["./src/**/*.tsx",
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        "lhfund": {
          colors: {
            background : "#FFFFFF",
            secondary: "#48BFA5",
            primary: {
              50 :"#FFFFFF",
              100:"#000000",
              DEFAULT: "#1CA59B",
            },
          },
        }
      }
    })
  ],
} satisfies Config;