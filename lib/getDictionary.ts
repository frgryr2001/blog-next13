// import 'server-only';
const dictionaries = {
  en: () =>
    import('./../dictinonaries/en.json').then((module) => module.default),
  vi: () =>
    import('./../dictinonaries/vi.json').then((module) => module.default),
};

type TypeLocale = 'en' | 'vi';

export const getDictionary = async (locale: string) => {
  if (!locale || locale === undefined || !dictionaries[locale as TypeLocale]) {
    return dictionaries['en']();
  } else {
    return dictionaries[locale as TypeLocale]();
  }
};
