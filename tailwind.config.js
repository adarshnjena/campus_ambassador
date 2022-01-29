module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [
    require('daisyui')
  ],
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    themes: false,
  },
  prefix: "tw-",
};
