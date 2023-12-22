import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { globalDecorators } from './decorators';
import i18n from '../i18n';
import { localeToolbar } from '../src/app/config/i18n';
import '../src/shared/styles/normalize.scss';
import '../src/shared/styles/reset.scss';

export const globalTypes = {
  i18n,
  localeToolbar,
};

i18n.on('languageChanged', (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

export const preview = {
  a11y: {
    config: {
      rules: [
        {
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          enabled: false,
          id: 'autocomplete-valid',
        },
      ],
    },
    disable: false,
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

export const decorators = globalDecorators;
