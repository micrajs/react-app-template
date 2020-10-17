import app from '@micra/application';
import { StaticServiceProvider, ServiceContainer } from '@micra/core';

const loadedResources: string[] = [];

export const initServiceProvider = (ServiceProvider: StaticServiceProvider) => {
  try {
    if (!loadedResources.includes(ServiceProvider.name)) {
      const serviceProviderInstance = new ServiceProvider(app.container as ServiceContainer);

      if (serviceProviderInstance.register) {
        serviceProviderInstance.register();
      }

      if (serviceProviderInstance.boot) {
        serviceProviderInstance.boot();
      }

      app.serviceProviders.push(serviceProviderInstance);
      loadedResources.push(ServiceProvider.name);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Failed to initialize service provider "${ServiceProvider.name}"`);
    throw e;
  }
};
