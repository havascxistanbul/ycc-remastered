export interface RightColTypes {
  header: string;
  paragraph: string;
  cta?: {
    href: string;
    text: string;
  };
  slider?: Slide[];
  qna?: QnaItem[];
  icons?: Icon[];
}

interface Slide {
  header: string;
  paragraph: string;
}

interface QnaItem {
  header: string;
  paragraph: string;
}

interface Icon {
  href?: string;
  alt: string;
  path: string;
}
