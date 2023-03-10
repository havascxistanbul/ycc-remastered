import React from 'react';
import { Content, LeftCol, RightCol, AboutAnimation } from '../../components';
import { Main } from '../../layout';
import { data } from './data';

function AboutUs(): JSX.Element {
  const tempParagraph =
    'Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. ';

  const tempTitle = 'We want to share our experience with you';

  return (
    <Main>
      <Content>
        <LeftCol>
          <AboutAnimation />
        </LeftCol>
        <RightCol
          header={tempTitle}
          paragraph={tempParagraph}
          cta={data.rightCol.cta}
          icons={data.rightCol.icons}
        />
      </Content>
    </Main>
  );
}

export default AboutUs;
