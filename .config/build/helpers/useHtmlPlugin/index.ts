import { Context } from '../createContext';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const useHtmlPlugin = ({ paths, config }: Context) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      title: process.env.APP_TITLE || 'Micra App',
      inject: true,
      base: '/',
      filename: paths.build('index.html'),
      template: paths.project(process.env.APP_INDEX_PATH),
      templateParameters: process.env,
    }),
  )
};
