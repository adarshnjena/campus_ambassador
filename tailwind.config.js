module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  corePlugins: {
    preflight: true,
  },
  daisyui: {
    themes: false,
  }
}
