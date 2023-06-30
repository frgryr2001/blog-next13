interface I18nConfig {
  defaultLocale: string;
  locales: string[];
}
export const i18n: I18nConfig = {
  defaultLocale: 'en',
  // Vietnamese and English are supported as optional languages.
  locales: ['en', 'vi'],
};
