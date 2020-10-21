import app from '@micra/application';

export const setActiveRoute = (route: any) => {
  app.container?.value('router/active-route', route);
};
