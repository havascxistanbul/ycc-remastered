import React from 'react';
import { Content, LeftCol, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';
import { AboutAnimation } from '../../componenets/Animations';

function Process(): JSX.Element {
  return (
    <Main>
      <Content>
        <LeftCol>
          <AboutAnimation />
        </LeftCol>
        <RightCol
          header={data.rightCol.header}
          paragraph={data.rightCol.paragraph}
          slider={data.rightCol.slider}
        />
      </Content>
    </Main>
  );
}

export default Process;
