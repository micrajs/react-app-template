import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Context } from '../createContext';
import { ENV } from '../env/constants';

export const useScss = ({ config, env }: Context) => {
  const isDev = env !== ENV.PROD;

  config.resolve.extensions.push('.scss', '.sass');

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
    }),
  );

  config.module.rules.push(
    {
      test: /\.(s)?css$/,
      exclude: /\.module.(s)?css$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDev,
          },
        },
        'postcss-loader',
      ],
    },
    {
      test: /\.module.(s)?css$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            sourceMap: isDev,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDev,
          },
        },
        'postcss-loader',
      ],
    }
  );
};
