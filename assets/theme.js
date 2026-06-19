/* Shared Tailwind theme — load right after the Tailwind CDN script.
   Defines the firm's palette and type scale for every page. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: '#1a1f4d',
        navydeep: '#11142f',
        ivory: '#f6f3ec',
        charcoal: '#2b2b2b',
        gold: '#b89651'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  }
};
