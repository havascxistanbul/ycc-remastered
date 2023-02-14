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
