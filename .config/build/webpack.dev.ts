import { Configuration } from 'webpack';
import { Context } from './helpers/createContext';
import { useDevServer } from './helpers/useDevServer';
import { useFonts } from './helpers/useFonts';
import { useHtmlPlugin } from './helpers/useHtmlPlugin';
import { useImage } from './helpers/useImage';
import { useReact } from './helpers/useReact';
import { useScss } from './helpers/useScss';
import { useTypescript } from './helpers/useTypescript';

export const dev = async (context: Context): Promise<Configuration> => {
  useScss(context);
  useReact(context);
  useImage(context);
  useFonts(context);
  useDevServer(context);
  useTypescript(context);
  useHtmlPlugin(context);
  const { config, paths } = context;

  // Mode
  config.mode = 'development';

  // DevTools
  config.devtool = 'source-map';

  // Entry
  config.entry['main'] = paths.project('index.ts');

  // Output
  config.output.filename = '[name].js';
  config.output.path = paths.build();
  config.resolve.modules = [
    paths.project(),
    'node_modules',
  ];

  return config;
};
