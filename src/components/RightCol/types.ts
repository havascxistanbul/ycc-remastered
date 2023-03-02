import type React from 'react';
export interface RightColTypes {
  header: string;
  paragraph?: string;
  cta?: {
    href: string;
    text: string;
  };
  slider?: Slide[];
  qna?: QnaItem[];
  icons?: Icon[];
  setIndex?: React.Dispatch<React.SetStateAction<number>>;
}

export interface Slide {
  header: string;
  paragraph: string;
}

export interface QnaItem {
  header: string;
  paragraph: string;
}

interface Icon {
  href?: string;
  alt: string;
  path: string;
}
