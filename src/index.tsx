import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';

import { App } from './app/components';

declare global {
  interface Window {
    SENTRY_RELEASE: string;
  }
}

if (window.SENTRY_RELEASE) {
  Sentry.init({
    dsn: 'https://cf893bfb65f84002b0d185ca2b53952a@o4505103507587072.ingest.sentry.io/4505103544877056',
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    integrations: [new Sentry.Replay()],
  });
}

const root = createRoot(document.getElementById('root'));
root.render(
  <Sentry.ErrorBoundary fallback='error'>
    <App />
  </Sentry.ErrorBoundary>,
);
