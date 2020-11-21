import * as Sentry from 'sentry-expo';

import App from './src/App';

Sentry.init({
  dsn: 'https://9a7356dfaf9142c787711ce218ba917b@o479340.ingest.sentry.io/5524141',
  enableInExpoDevelopment: true,
  debug: __DEV__, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

export default App;
