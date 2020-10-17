import { AppConfig as BaseAppConfig } from '@micra/application';

export type AppConfig = BaseAppConfig & {
  name: string;
  url: string;
};

export interface UseCase<I extends Record<string, any> = Record<string, any>, R = any> {
  run(input: I): Promise<R>;
}
