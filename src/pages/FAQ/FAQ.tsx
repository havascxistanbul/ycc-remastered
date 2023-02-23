import React from 'react';
import { Content, LeftCol, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';
import { AboutAnimation } from '../../componenets/Animations';

function FAQ(): JSX.Element {
  return (
    <Main>
      <Content>
        <LeftCol>
          <AboutAnimation />
        </LeftCol>
        <RightCol
          header={data.rightCol.header}
          paragraph={data.rightCol.paragraph}
          qna={data.rightCol.qna}
        />
      </Content>
    </Main>
  );
}

export default FAQ;
