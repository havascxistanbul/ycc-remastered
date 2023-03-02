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
      'Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. ',
    qna: [
      {
        header: 'Do you require physical presence?',
        paragraph:
          'No. Hey it’s 2023 and of course you can work from anywhere in the world! That’s what we do.\n' +
          '\n' +
          'Regardless of Covid-19 pandemic, we work across countries and continents from Istanbul and we do not require physical office presence. All work is remote, but you are expected to have a dependable internet connection with a computer of your own during the training. In future, we might want to see you in person just to have fun together like any great team does, but work will always be remote for us.\n' +
          '\n',
      },
      {
        header: 'Is there flexibility on timing?',
        paragraph:
          'We have planned 3 weeks of introductory technical training program where you will join great tech lectures from industry projects and will be assigned with mini-projects that you can handle even during your school agenda. After 3 weeks, you will have finished with precious know-how, relations and possibly a new career path after an intense walk-through in most important tech agenda in industry.\n' +
          '\n',
      },
      {
        header: 'Is this a paid job opportunity?',
        paragraph:
          'Training is completely free. For those who successfully complete the training will get an internship position and we are covering all internship costs and obligations required by laws if your school does not have an additional support. When you demonstrate your skills, our program is designed to onboard successful participants as part of our technology teams, so successful candidates can definitely expect a job offer!\n' +
          '\n',
      },
      {
        header: 'Will there be mentors during the program?',
        paragraph:
          'Yes! You will have a peer support from various professionals. Our objective is to understand your abilities and ambitions, then find the best project for you to work.  ',
      },
      {
        header: 'Program harika, ama ingilizcem iyi değil, ne yapmalıyım?',
        paragraph:
          'İleride iyi bir yazılım geliştiricisi olacağınıza inanıyorsanız ve bizi ikna edebileceğiniz bir kaç satır kod yazabilecekseniz, sizinle yine de tanışmak isteriz. İngilizce eğitim programlarımıza katılabilir ve ingilizcenizi zaman içinde geliştirebilirsiniz.\n' +
          '\n',
      },
      {
        header: 'I do not reside in Turkey but I want to join the program?',
        paragraph:
          'Yes you can! First phase of the program is designed for Turkish citizens but we are a global team and Young Coders Club is open to all students/fresh graduates around the world as long as you’re good to apply and you can follow our training program schedule.\n' +
          '\n',
      },
      {
        header: 'Is this a one-time, summer-only program?',
        paragraph:
          'No. HAVAS Code Camp will be organized multiple times through-out the year, not just summer. If you can dedicate at least 12 hours per week during school time, you can also apply anytime, we want to meet you!',
      },
      {
        header: 'Should I have a specific coding experience?',
        paragraph:
          'This is a program for students or fresh graduates so we obviously do not look for “previous job experience” but it is a very important advantage if you have a personal code repo / pet project you can explain to us. We look for candidates who are dirty handed with code. Your passion and the amount of personal effort you have put into coding is what matters here, not your “experience”.',
      },
    ],
  },
};
