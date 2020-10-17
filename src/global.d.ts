/// <reference types="react" />

type EnvVariables = {
  APP_TITLE: string;
  APP_INDEX_PATH: string;
};

type GADataLayer = any[];
type Use = import('@micra/core').ServiceContainer['use'];
type Config = {
  <T = any>(variable: string): T | undefined;
  <T = any>(variable: string, fallback: T): T;
};
type Env = {
  (name: keyof EnvVariables): string | undefined;
  (name: keyof EnvVariables, fallback: string): string;
};

declare const env: Env;
declare const use: Use;
declare const config: Config;
declare const dataLayer: GADataLayer;

interface Window {
  config: Config;
  env: Env;
  use: Use;
  dataLayer: GADataLayer;
}

declare namespace NodeJS {
  type ProcessEnv = EnvVariables;
  interface Global {
    config: Config;
    env: Env;
    use: Use;
  }
}
