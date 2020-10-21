import i18n, { i18n as I18n } from 'i18next';
import { Config } from '@micra/core';
import { ServiceProvider } from '@micra/service-provider';
import { TranslationConfig } from 'app/translation/types';
import * as common from 'app/translation/translations';

export class TranslationServiceProvider extends ServiceProvider {
  register() {
    this.container.value('translation', i18n);
  }

  boot() {
    const translation = this.container.use<I18n>('translation');
    const config = this.container
      .use<Config>('config')
      .get('translation') as TranslationConfig;

    // Initialize common vocabulary
    config.languages.forEach(language => {
      if (common[language]) {
        translation.addResourceBundle(language, translation.options.defaultNS ?? 'common', common[language]);
      }
    });

    // Initialize plugins
    config.plugins.forEach(plugin => translation.use(plugin));

    // Initialize service
    translation.init(config.options);
  }
}
