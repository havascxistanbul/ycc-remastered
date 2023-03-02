import React, { useState } from 'react';
import { Content, LeftCol, RightCol } from '../../components';
import { Main } from '../../layout';
import { data } from './data';
import { ApplyAnimation } from '../../components/Animations';

function Process(): JSX.Element {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <Main>
      <Content>
        <LeftCol>
          <ApplyAnimation />
        </LeftCol>
        <RightCol
          header={data.rightCol.header}
          paragraph={data.rightCol.paragraph}
          slider={data.rightCol.slider}
          setIndex={setIndex}
        />
      </Content>
    </Main>
  );
}

export default Process;
