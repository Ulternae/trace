interface SocialMedia {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  twitch?: string;
}

interface User {
  firstNames: string;
  lastNames: string;
  description: string;
  phone: string;
  country: string;
  gender: string;
  profession: string;
  role: string;
  social_media: SocialMedia;
  address: string;
  birthDate: string;
  status: string;
  language: string;
  email: string;
  avatar: number;
  avatarUrl: string;
  isFavorite: boolean;
  registrationDate: string;
  id: string;
}

export type { User }