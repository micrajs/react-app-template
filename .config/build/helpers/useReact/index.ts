import { Context } from '../createContext';
import { ENV } from '../env/constants';

export const useReact = ({ env, config }: Context) => {
  config.module.rules.push({
    test: /\.js(x)?$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  });

  config.resolve.extensions.push('.js', '.jsx');

  if (env !== ENV.PROD) {
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  }
};
