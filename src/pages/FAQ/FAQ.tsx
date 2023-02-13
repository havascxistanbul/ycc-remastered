import React from 'react';
import { Content, LeftCol, Navbar, RightCol } from '../../componenets';
import { Main } from '../../layout';
import { data } from './data';

function FAQ(): JSX.Element {
  return (
    <>
      <Navbar />
      <Main>
        <Content>
          <LeftCol props={data.leftCol} />
          <RightCol
            header={data.rightCol.header}
            paragraph={data.rightCol.paragraph}
            cta={data.rightCol.cta}
            icons={data.rightCol.icons}
            qna={data.rightCol.qna}
          />
        </Content>
      </Main>
    </>
  );
}

export default FAQ;
