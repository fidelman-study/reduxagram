import Raven from 'raven-js';

const sentry_key = 'b40977084ab547ed9e00a548790ccb0c';
const sentry_app = '102631';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
