import "server-only";

interface Dictionary {
  contact: unknown;
  pricing: Record<string, string>;
  featureBentoGrid: Record<string, any>;
  testimonials: Record<string, any>;
  faq: Record<string, any>;
  footer: Record<string, string>;
  navigation: Record<string, string>;
  hero: Record<string, string>;
  features: Record<string, string>;
  cta: Record<string, string>;
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  it: () => import("./dictionaries/it.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Utiliser 'en' par défaut si la locale n'existe pas
  return (dictionaries[locale] || dictionaries.en)();
};
