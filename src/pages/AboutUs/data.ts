import { type RightColTypes } from '../../components/RightCol/types';
export interface Content {
  leftCol: string;
  rightCol: RightColTypes;
}
export const data: Content = {
  leftCol: 'asd',
  rightCol: {
    header: 'Who are we?',
    paragraph:
      'Young Coders Club is supported by Havas Group (havas.com) - a global communication network founded in 1835 by Charles Louis Havas, employing 19,000 people in over 100 countries. HAVAS CX Istanbul is one of the technology hubs and deliver development services to North American and European clients, collaborating with different offices ranging from Toronto to Singapore. \n' +
      '\n' +
      'We create digital platforms utilizing latest front-end and back-end technologies - including but not limited to React, Pyhton, .net, NodeJs and GoLang. Joining us means joining a awesome global development team that delivers!',
    cta: {
      href: '#',
      text: 'Apply Now',
    },
    icons: [
      {
        href: '#',
        alt: 'Havas CX',
        path: '/images/ph.svg',
      },
      {
        href: '#',
        alt: 'ProjectHouse',
        path: '/images/ph.svg',
      },
    ],
  },
};
