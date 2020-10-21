import { Middleware } from '@micra/route-registry';

export interface RouterConfig {
  prefix?: string;
  middlewares: Middleware[];
}
