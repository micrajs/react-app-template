import { app } from 'app/bootstrap';
import { needsPolyfills } from 'app/polyfills';

if (needsPolyfills) {
  import('app/polyfills/libraries').then(() => {
    app.run();
  });
} else {
  app.run();
}
