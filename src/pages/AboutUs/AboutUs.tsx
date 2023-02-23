import React from 'react';
import { Content, LeftCol, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';
import { AboutAnimation } from '../../componenets/Animations';

function AboutUs(): JSX.Element {
  return (
    <Main>
      <Content>
        <LeftCol>
           <AboutAnimation />
        </LeftCol>
        <RightCol
          header={data.rightCol.header}
          paragraph={data.rightCol.paragraph}
          cta={data.rightCol.cta}
          icons={data.rightCol.icons}
        />
      </Content>
    </Main>
  );
}

export default AboutUs;
