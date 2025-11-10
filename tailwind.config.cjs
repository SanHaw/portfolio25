module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
    'site-bg': '#f7f6f4',
  'site-text': '#262318',
  'accent': '#fcd22a',
      },
      fontFamily: {
        sans: ['Stack Sans Headline', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
