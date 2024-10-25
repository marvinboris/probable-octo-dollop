import { resources } from '../services/i18n';

export type i18nKey = keyof (typeof resources)['en']['translation'];
