import React from 'react';
import { Content, Navbar } from '../../componenets';
import { Main } from '../../layout';

function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <Main>
        <Content />
      </Main>
    </>
  );
}

export default Home;
