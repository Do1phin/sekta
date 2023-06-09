import * as Sentry from '@sentry/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import { App } from './app/ui';
import i18n from '../i18n';

declare global {
  interface Window {
    SENTRY_RELEASE: string;
  }
}

if (window.SENTRY_RELEASE) {
  Sentry.init({
    dsn: 'https://cf893bfb65f84002b0d185ca2b53952a@o4505103507587072.ingest.sentry.io/4505103544877056',
    integrations: [new Sentry.Replay()],
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
  });
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Sentry.ErrorBoundary fallback={<p>Loading...</p>}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Sentry.ErrorBoundary>,
);
