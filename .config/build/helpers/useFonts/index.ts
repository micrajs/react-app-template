import { Context } from '../createContext';

export const useFonts = (context: Context) => {
  context.config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      'file-loader',
    ],
  });
};
