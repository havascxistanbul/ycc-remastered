import React from 'react';
import { Content, LeftCol, RightCol, AboutAnimation } from '../../components';
import { Main } from '../../layout';
import { data } from './data';

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
