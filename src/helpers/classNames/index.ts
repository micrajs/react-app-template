export const classNames = <T = string>(...list: (string | Record<string, boolean>)[]): T =>
  list
    .map((className) => {
      if (typeof className === 'string') {
        return className;
      }

      const classes = Object.keys(className);
      return classes
        .filter((name) => className[name])
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim() as any;
