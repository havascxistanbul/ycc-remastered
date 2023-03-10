import React, { useState } from 'react';
import { Content, LeftCol, RightCol, ApplyAnimation, TestAnimation, InterviewAnimation } from '../../components';
import { Main } from '../../layout';
import { data } from './data';

function Process(): JSX.Element {
  const [index, setIndex] = useState(0);
  const tempSlider = [
    {
      header: 'Applying the program',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. ',
    },
    {
      header: 'Applying the program',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. ',
    },
    {
      header: 'Applying the program',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. Lorem ipsum dolor sit amet consectetur. Diam tellus nibh quis laoreet tellus sed hac turpis id. Elit leo ante augue quis rutrum. ',
    },
  ];

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
          slider={tempSlider}
          setIndex={setIndex}
        />
      </Content>
    </Main>
  );
}

export default Process;
