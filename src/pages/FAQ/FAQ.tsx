import React from 'react';
import { Content, LeftCol, RightCol } from '../../components';
import { Main } from '../../layout';
import { data } from './data';
import { AboutAnimation } from '../../components/Animations';

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
