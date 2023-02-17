import { HomePage, AboutUsPage, FAQ, ProcessPage } from './pages';

const routes = [
  {
    name: 'Home Page',
    path: '/',
    exact: true,
    element: HomePage,
  },
  {
    name: 'About Us Page',
    path: '/about-us',
    exact: true,
    element: AboutUsPage,
  },
  {
    name: 'FAQ',
    path: '/faq',
    exact: true,
    element: FAQ,
  },
  {
    name: 'Process Page',
    path: '/process',
    exact: true,
    element: ProcessPage,
  },
];

export default routes;
