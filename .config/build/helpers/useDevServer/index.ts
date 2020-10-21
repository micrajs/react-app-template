import { Context } from '../createContext';
import { ENV } from '../env/constants';

export const useDevServer = (context: Context) => {
  if (context.env !== ENV.PROD) {
    context.config['devServer'] = {
      port: process.env.PORT ?? 3000,
      historyApiFallback: {
        index: 'index.html'
      },
      contentBase: context.paths.build(),
    };
  }
};
