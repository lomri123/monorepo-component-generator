module.exports = {
  stories: [
    "../packages/ui-components/**/src/**/*.stories.mdx",
    "../packages/ui-components/**/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
