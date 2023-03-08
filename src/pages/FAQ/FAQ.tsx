import React from 'react';
import { Content, LeftCol, RightCol, FaqAnimation } from '../../components';
import { Main } from '../../layout';
import { data } from './data';

function FAQ(): JSX.Element {
  const tempParagraph =
    'Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. ';

  return (
    <Main>
      <Content>
        <LeftCol>
          <FaqAnimation />
        </LeftCol>
        <RightCol
          header={data.rightCol.header}
          paragraph={tempParagraph}
          qna={data.rightCol.qna}
        />
      </Content>
    </Main>
  );
}

export default FAQ;
