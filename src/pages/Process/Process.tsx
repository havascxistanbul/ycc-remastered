import React, { useState } from 'react';
import { Content, LeftCol, RightCol, ApplyAnimation, TestAnimation, InterviewAnimation } from '../../components';
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
          {index === 2 && <InterviewAnimation />}
        </LeftCol>
        <RightCol
          header={data.rightCol.header}
          slider={data.rightCol.slider}
          setIndex={setIndex}
        />
      </Content>
    </Main>
  );
}

export default Process;
