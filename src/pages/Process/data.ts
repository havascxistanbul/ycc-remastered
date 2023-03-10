import { type RightColTypes } from '../../components/RightCol/types';
export interface Content {
  leftCol: string;
  rightCol: RightColTypes;
}
export const data: Content = {
  leftCol: 'asd',
  rightCol: {
    header: 'Are you just started your Software Development career?',
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
