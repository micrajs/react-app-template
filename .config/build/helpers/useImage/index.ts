import { Context } from '../createContext';

export const useImage = (context: Context) => {
  context.config.module.rules.push({
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader',
    ],
  });
};
