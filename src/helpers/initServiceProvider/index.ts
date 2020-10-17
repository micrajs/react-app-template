import app from '@micra/application';
import { StaticServiceProvider, ServiceContainer } from '@micra/core';

const loadedResources: string[] = [];

export const initServiceProvider = (serviceProvider: StaticServiceProvider) => {
  try {
    if (!loadedResources.includes(serviceProvider.name)) {
      const serviceProviderInstance = new serviceProvider(app.container as ServiceContainer);

      if (serviceProviderInstance.register) {
        serviceProviderInstance.register();
      }

      if (serviceProviderInstance.boot) {
        serviceProviderInstance.boot();
      }

      app.serviceProviders.push(serviceProviderInstance);
      loadedResources.push(serviceProvider.name);
    }
  } catch (e) {
    console.error(`Failed to initialize service provider "${serviceProvider.name}"`);
    throw e;
  }
};
