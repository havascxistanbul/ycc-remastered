import { type RightColTypes } from '../../componenets/RightCol/types';
export interface Content {
  leftCol: string;
  rightCol: RightColTypes;
}
export const data: Content = {
  leftCol: 'asd',
  rightCol: {
    header: 'Are you just started your Software Development career?',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. ',
    cta: {
      href: '#',
      text: 'Apply Now',
    },
  },
};
