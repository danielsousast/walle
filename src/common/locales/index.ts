import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enUS from './en-US';
import ptBR from './pt-BR';
import {NativeModules, Platform} from 'react-native';

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

const language = locale.substring(0, 2);

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: language,
  fallbackLng: 'en',
  resources: {
    en: enUS,
    pt: ptBR,
  },

  interpolation: {
    escapeValue: false,
  },
});

type keyType = keyof (typeof ptBR)['translation'];

export const translate = (key: keyType) => i18n.t(key);
