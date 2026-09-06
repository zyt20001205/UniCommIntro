import enUS from './locales/en-US';
import zhCN from './locales/zh-CN';

export const defaultNS = 'translation';

export const resources = {
  'en-US': {
    translation: enUS,
  },
  'zh-CN': {
    translation: zhCN,
  },
} as const;

export type Locale = keyof typeof resources;
