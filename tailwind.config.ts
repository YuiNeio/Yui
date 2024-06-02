import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg_image': "url('/assets/bg.webp')"
      },
      container: {
        center: true,
        padding: '15px'
      },

      colors: {
        'shadowBox': '#CBDBFC',
        'boxColor': '#2155CD',
        'textTitle': '#0AA1DD',
        'bgColor': '#141529'
      },

      fontFamily: {
        'firaCode': "'Fira Code', monospace",
        'rubikFont': "'Rubik Mono One', sans-serif",
      },

      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [nextui()],
}
export default config
