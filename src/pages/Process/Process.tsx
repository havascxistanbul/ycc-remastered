import React, { useState } from 'react';
import { Content, LeftCol, RightCol, ApplyAnimation, TestAnimation } from '../../components';
import { Main } from '../../layout';
import { data } from './data';

function Process(): JSX.Element {
  const [index, setIndex] = useState(0);

  return (
    <Main>
      <Content>
        <LeftCol>
          {index === 0 && <ApplyAnimation />}
          {index === 1 && <TestAnimation />}
          {index === 2 && <ApplyAnimation />}
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
