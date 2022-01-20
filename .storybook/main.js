module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/react",
  "typescript": {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript'
  },
  core: {
    builder: "webpack5"
  }
};