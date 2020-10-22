export const needsPolyfills = !(
  'fetch' in window &&
  'Intl' in window &&
  'URL' in window &&
  'Map' in window &&
  'forEach' in NodeList.prototype &&
  'startsWith' in String.prototype &&
  'endsWith' in String.prototype &&
  'includes' in String.prototype &&
  'includes' in Array.prototype &&
  'assign' in Object &&
  'entries' in Object &&
  'keys' in Object
);
