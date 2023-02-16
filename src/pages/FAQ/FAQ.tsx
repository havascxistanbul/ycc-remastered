import React from 'react';
import { Content, LeftCol, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';

function FAQ(): JSX.Element {
  return (
    <Main>
      <Content>
        <LeftCol src={data.leftCol} />
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
