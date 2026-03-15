export interface Genre {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface CharacterState {
  step: 1 | 2 | 3 | 4;
  genre: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  appearance: {
    hairStyle: string;
    hairColor: string;
    eyeColor: string;
    features: string[];
  };
  personality: string[];
  storyBackground: string;
  loveInterestType: string;
  storyTone: number;
  characterImage: string | null;
}

export interface Comic {
  id: string;
  title: string;
  genre: string;
  coverGradient: string;
  rating: number;
  readerCount: number;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Option {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  description?: string;
}
