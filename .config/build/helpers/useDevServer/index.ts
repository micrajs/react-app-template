import { Context } from '../createContext';
import { ENV } from '../env/constants';

export const useDevServer = (context: Context) => {
  if (context.env !== ENV.PROD) {
    context.config['devServer'] = {
      contentBase: context.paths.build(),
    };
  }
};
