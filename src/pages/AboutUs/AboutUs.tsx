import React from 'react';
import { Content, LeftCol, Navbar, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';

function AboutUs(): JSX.Element {
  return (
    <>
      <Navbar />
      <Main>
        <Content>
          <LeftCol src={data.leftCol} />
          <RightCol
            header={data.rightCol.header}
            paragraph={data.rightCol.paragraph}
            cta={data.rightCol.cta}
            icons={data.rightCol.icons}
          />
        </Content>
      </Main>
    </>
  );
}

export default AboutUs;
