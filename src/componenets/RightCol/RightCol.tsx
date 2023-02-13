import React from 'react';
import { type RightColTypes } from './types';
import { RightChevron } from '../Icons';
import { v4 as uuidv4 } from 'uuid';
import { Accordion } from '../Accordion';
import './styles.scss';

function RightCol({ header, paragraph, cta, qna, slider, icons }: RightColTypes): JSX.Element {
  console.log(icons);

  return (
    <div className="right-col">
      <h2 className="right-col__header">{header}</h2>
      <p className="right-col__paragraph">{paragraph}</p>
      {icons !== undefined && (
        <ul className="right-col__icons">
          {icons.map((icon) => (
            <li
              className="right-col__icon"
              key={uuidv4()}
            >
              <a
                className="right-col__icon__link"
                href={icon?.href}
              >
                <img
                  className="right-col__icon__self"
                  src={icon.path}
                  alt={icon.alt}
                />
              </a>
            </li>
          ))}
        </ul>
      )}
      {cta !== undefined && (
        <a
          className="right-col__cta"
          href={cta.href}
        >
          {cta.text}
          <RightChevron />
        </a>
      )}
      {qna !== undefined && <Accordion items={qna} />}
    </div>
  );
}

export default RightCol;
