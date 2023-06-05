import { QueryClientProvider } from '@tanstack/react-query';
import React, { FC, Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { withDesign } from 'storybook-addon-designs';

import i18n from '../i18n';
import { queryClient } from '../src/app/config/react-query';
import { store } from '../src/app/store';

const WithI18next = (StoryFn: FC, context) => {
  const { localeToolbar } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(localeToolbar);
  }, [localeToolbar]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <StoryFn />
      </I18nextProvider>
    </Suspense>
  );
};

const WithReactQuery = (StoryFn: FC) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>RQ loading...</div>}>
        <StoryFn />
      </Suspense>
    </QueryClientProvider>
  );
};

const WithReactRouterDom = (StoryFn: FC) => {
  return (
    <Suspense fallback={<div>RRD loading...</div>}>
      <BrowserRouter>
        <StoryFn />
      </BrowserRouter>
    </Suspense>
  );
};

const WithStore = (StoryFn: FC) => {
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  );
};

export const globalDecorators = [
  withDesign,
  WithI18next,
  WithReactQuery,
  WithReactRouterDom,
  WithStore,
];
