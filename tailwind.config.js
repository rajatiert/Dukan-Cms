/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        dukan : {
          darkBlue :"#1E2640",
          lightGray:"#353C53",
          black:"#1A181E",
          black12:"#1A181E",
          black30:"#4D4D4D",
          black50:"#808080",
          black90:"#E6E6E6",
          black95:"#F2F2F2",
          black85:"#D9D9D9",
          primaryBlue:"#146EB4",
          hoverBlue:"#0E4F82",
        
        }
      }
      
    },
  },
  plugins: [],
}
