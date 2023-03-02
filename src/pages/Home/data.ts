import { type RightColTypes } from '../../components/RightCol/types';
export interface Content {
  leftCol: string;
  rightCol: RightColTypes;
}
export const data: Content = {
  leftCol: 'asd',
  rightCol: {
    header: 'Are you just started your Software Development career?',
    paragraph:
      'Young Coders Club is a free training program and for successful graduates, a chance to work as a paid intern with our technology teams to be one of our full-time team members with hands-on, real-life tech projects around the world!\n' +
      '\n' +
      'This is our call to bright and ambitious coder students (or fresh graduates!) who have a demonstrable interest and knowledge on coding and web technologies with little or no industry experience and great passion to grow their career beyond borders. Young Coders Club, supported by the global network of HAVAS, is your bridge during the transition from school to business life.\n' +
      '\n' +
      'This journey starts with our free training program! Send us your CV (or better your GitHub link) now. Eligible candidates will be invited for an interview and successful candidates will join our training program with an opportunity to work in our global IT environment.',
    cta: {
      href: '#',
      text: 'Apply Now',
    },
  },
};
