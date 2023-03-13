import React from 'react';
import { AboutUsPage, ProcessPage, HomePage, FAQ } from '../../pages';

function MobileView(): JSX.Element {
  return (
    <>
      <HomePage />
      <AboutUsPage />
      <ProcessPage />
      <FAQ />
    </>
  );
}

export default MobileView;
