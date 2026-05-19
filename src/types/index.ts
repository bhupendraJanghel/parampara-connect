import type { IconType } from 'react-icons';

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  url: string;
}

export interface SocialLink {
  id: string;
  icon: IconType;
  url: string;
}
