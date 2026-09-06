import i18next from 'i18next';

import {defaultNS, resources} from './resources';
import type {Locale} from './resources';

export const activeLocale: Locale = 'en-US';

void i18next.init({
  resources,
  defaultNS,
  lng: activeLocale,
  fallbackLng: 'en-US',
  supportedLngs: Object.keys(resources),
  initAsync: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
