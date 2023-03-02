import React from 'react';
import { Content, LeftCol, RightCol, FaqAnimation } from '../../components';
import { Main } from '../../layout';
import { data } from './data';

function FAQ(): JSX.Element {
  return (
    <Main>
      <Content>
        <LeftCol>
          <FaqAnimation />
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
