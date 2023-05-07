import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview = {
  a11y: {
    disable: false,
    config: {
      rules: [
        {
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          id: 'autocomplete-valid',
          enabled: false,
        },
      ],
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export default preview;
