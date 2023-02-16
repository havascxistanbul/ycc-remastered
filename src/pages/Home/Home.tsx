import React from 'react';
import { Content, LeftCol, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';

function Home(): JSX.Element {
  return (
    <Main>
      <Content>
        <LeftCol src={data.leftCol} />
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
