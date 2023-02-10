import React from 'react';
import { type RightColTypes } from './types';
import { RightChevron } from '../Icons';
import './styles.scss';

function RightCol({ header, paragraph, cta, qna, slider, icons }: RightColTypes): JSX.Element {
  return (
    <div className="right-col">
      <h2 className="right-col__header">{header}</h2>
      <p className="right-col__paragraph">{paragraph}</p>
      {cta !== undefined && (
        <a
          className="right-col__cta"
          href={cta.href}
        >
          {cta.text}
          <RightChevron />
        </a>
      )}
    </div>
  );
}

export default RightCol;
