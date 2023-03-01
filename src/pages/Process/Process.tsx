import React from 'react';
import { Content, LeftCol, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';
import { ProcessAnimation } from '../../componenets/Animations';

function Process(): JSX.Element {
  return (
    <Main>
      <Content>
        <LeftCol>
          <ProcessAnimation />
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
