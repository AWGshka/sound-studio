export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  address: {
    street: string;
    city: string;
    metro?: string;
    url: string;
  };
  contact: {
    phones: string[];
    email: string;
    url: string;
    workingHours: {
      weekdays: string;
      weekends: string;
    };
  };
  socialMedia: {
    vk?: string;
    youtube?: string;
    soundcloud?: string;
    telegram?: string;
    spotify?: string;
    yandexMusic?: string;
    appleMusic?: string;
  };
  keywords: string[];
  location: {
    coordinates: [number, number];
    zoom: number;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: {
    from: number;
    currency: string;
  };
  icon: string;
  features?: string[];
}

export interface Equipment {
  category: string;
  items: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  artist: string;
  genre: string;
  services: string[];
  audioUrl?: string;
  imageUrl: string;
  releaseDate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  photo: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
}

export interface HeroContent {
  title: {
    main: string;
    highlight: string;
  };
  subtitle: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface SectionContent {
  about: {
    title: string;
    additionalDescription: string;
    equipmentTitle: string;
    learnMoreButton: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    listenButton: string;
    detailsButton: string;
  };
  team: {
    title: string;
    subtitle: string;
  };
  reviews: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    telegram: {
      title: string;
      description: string;
      buttonText: string;
    };
    info: {
      addressTitle: string;
      phoneTitle: string;
      emailTitle: string;
      workingHoursTitle: string;
    };
    mapTitle: string;
  };
  footer: {
    servicesTitle: string;
    contactsTitle: string;
    socialTitle: string;
    copyright: string;
  };
}

export interface SiteConfig {
  studio: StudioInfo;
  hero: HeroContent;
  services: Service[];
  equipment: Equipment[];
  gallery: GalleryItem[];
  portfolio: PortfolioItem[];
  team: TeamMember[];
  stats: Array<{
    value: string;
    label: string;
  }>;
  sections: SectionContent;
}
