import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          titanium: '#beb8ae',
          blue: '#0071e3',
          blueLink: '#2997ff',
          white: '#f5f5f7',
          softGray: '#86868b',
          bgSoftGray: '#101010'
        }
      }
    }
  },
  plugins: []
}
export default config
