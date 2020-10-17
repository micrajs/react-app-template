import { Configuration } from 'webpack';
import { Context } from './helpers/createContext';

export const prod = async (context: Context): Promise<Configuration> => {
  return {
    mode: 'production',
  };
};
