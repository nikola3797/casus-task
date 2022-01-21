module.exports = {
  stories: [
      '../src/components/**/*.stories.js',
      '../src/pages/**/*.stories.js',
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
};
