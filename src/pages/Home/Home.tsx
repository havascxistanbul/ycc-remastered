import React from 'react';
import { Content, LeftCol, RightCol } from '../../components';
import { Main } from '../../layout';
import { data } from './data';
import { HomeAnimation } from '../../components/Animations';

function Home(): JSX.Element {
  return (
    <Main>
      <Content>
        <LeftCol>
          <HomeAnimation />
        </LeftCol>
        <RightCol
          header={data.rightCol.header}
          paragraph={data.rightCol.paragraph}
          cta={data.rightCol.cta}
        />
      </Content>
    </Main>
  );
}

export default Home;
