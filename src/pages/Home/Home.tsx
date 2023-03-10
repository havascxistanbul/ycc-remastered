import React from 'react';
import { Content, LeftCol, RightCol, HomeAnimation } from '../../components';
import { Main } from '../../layout';
import { data } from './data';

function Home(): JSX.Element {
  const tempParagraph =
    'Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. ';

  const tempTitle = 'Are you just started your Software Development career?';

  return (
    <Main>
      <Content>
        <LeftCol>
          <HomeAnimation />
        </LeftCol>
        <RightCol
          header={tempTitle}
          paragraph={tempParagraph}
          cta={data.rightCol.cta}
        />
      </Content>
    </Main>
  );
}

export default Home;
