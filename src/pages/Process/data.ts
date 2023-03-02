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
      'There are a few steps we want you to complete to participate in Young Coders Club program. After successfully completing these stages, you will have the chance to work as a paid intern with our technology teams, then become one of our full-time team members working on technology projects around the world!',
    slider: [
      {
        header: 'Apply',
        paragraph: 'Send us your GitHub link and LinkedIn profile via Apply Now section.',
      },
      {
        header: 'Test',
        paragraph: 'After your application, we will send you test and ask you to complete it the given time.',
      },
      {
        header: 'Interview',
        paragraph:
          'We will conduct an online interview with the students who completed their test with successs and the will start our education program with the students who passed the interview.',
      },
    ],
  },
};
