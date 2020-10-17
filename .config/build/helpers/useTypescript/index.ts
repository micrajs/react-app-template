import { Context } from '../createContext';

export const useTypescript = ({ config, paths }: Context) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      configFile: paths.root('tsconfig.json'),
    },
  });

  config.resolve.extensions.unshift('.ts', '.tsx');
};
