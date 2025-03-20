import "server-only";

interface Navigation {
  resources: string;
  blog: string;
  "blog-description": string;
  newfeatures: string;
  "newfeatures-description": string;
  pricing: string;
  contact: string;
  connexion: string;
  signup: string;
}

interface Hero {
  latestFeature: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  benefit_1: string;
  benefit_2: string;
  videoSrc: string;
}

interface Cta {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: string;
  primaryButtonLink: string;
  imageAlt: string;
  imageSrc: string;
}

interface Features {
  title: string;
  description: string;
  stepShowcaseTitle: string;
  stats: {
    value: number;
    unit: string;
    label: string;
  }[];
  steps: {
    number: number;
    title: string;
    description: string;
    image: string;
  }[];
  step_indicator: string;
}

interface FeatureBentoGrid {
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
    image: string;
  }[];
}

interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  text: string;
  verified: boolean;
}

interface Testimonials {
  title: string;
  testimonials: Testimonial[];
}

interface Faq {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

interface Footer {
  title: string;
  description: string;
  emailPlaceholder: string;
  subscribeButton: string;
  subscribedButton: string;
  blogLink: string;
  blogDescription: string;
  newFeaturesLink: string;
  newFeaturesDescription: string;
  contactLink: string;
  logo: string;
  privacyPolicy: string;
  termsOfService: string;
  copyright: string;
}

interface Pricing {
  hero: {
    title: string;
    description: string;
    monthly: string;
    yearly: string;
    save: string;
  };
  plans: {
    starter: {
      title: string;
      description: string;
      priceMonthly: number;
      priceYearly: number;
      features: string[];
    };
    growth: {
      title: string;
      description: string;
      priceMonthly: number;
      priceYearly: number;
      features: string[];
      mostPopular: string;
    };
    business: {
      title: string;
      description: string;
      priceMonthly: number;
      priceYearly: number;
      features: string[];
    };
  };
  featureComparison: {
    title: string;
    features: {
      label: string;
      starter: boolean;
      growth: boolean;
      business: boolean;
    }[];
  };
  otherPerks: {
    title: string;
    perks: {
      label: string;
      starter: boolean;
      growth: boolean;
      business: boolean;
    }[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

interface Contact {
  title: string;
  description: string;
  mail: string;
  mailValue: string;
  mailDescription: string;
  office: string;
  officeValue: string;
  officeDescription: string;
  form: {
    title: string;
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    message: string;
    privacyPolicy: string;
    privacyPolicyLink: string;
    privacyPolicyLinkText: string;
    submit: string;
  };
  successMessage: {
    title: string;
    description: string;
    button: string;
  };
}

interface Dictionary {
  contact: Contact;
  pricing: Pricing;
  featureBentoGrid: FeatureBentoGrid;
  testimonials: Testimonials;
  faq: Faq;
  footer: Footer;
  navigation: Navigation;
  hero: Hero;
  features: Features;
  cta: Cta;
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
