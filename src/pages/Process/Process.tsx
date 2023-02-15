import React from 'react';
import { Content, LeftCol, Navbar, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';

function Process(): JSX.Element {
  return (
    <>
      <Navbar />
      <Main>
        <Content>
          <LeftCol src={data.leftCol} />
          <RightCol
            header={data.rightCol.header}
            paragraph={data.rightCol.paragraph}
            slider={data.rightCol.slider}
          />
        </Content>
      </Main>
    </>
  );
}

export default Process;
