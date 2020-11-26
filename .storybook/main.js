module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@component-controls/storybook',
      options: {
        pages: [
          require.resolve('@component-controls/storybook/full-page'), // this is the default documentation oage
          require.resolve('./testing-page'),
        ],
        webpack: ['instrument', 'react-docgen-typescript'],
      }  
    }
  ],
};
