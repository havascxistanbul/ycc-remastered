import React from 'react';
import { clsx } from 'clsx';
import { type RightColTypes } from './types';
import { RightChevron } from '../Icons';
import { v4 as uuidv4 } from 'uuid';
import { Accordion } from '../Accordion';
import { Slider } from '../Slider';
import './styles.scss';

function RightCol({ header, paragraph, cta, qna, slider, icons, setIndex }: RightColTypes): JSX.Element {
  return (
    <div className={clsx('right-col', qna === undefined && 'right-col--alt')}>
      <div>
        <h2 className="right-col__header">{header}</h2>
        <p className="right-col__paragraph">{paragraph}</p>
      </div>
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
      {slider !== undefined && (
        <Slider
          slider={slider}
          setIndex={setIndex}
        />
      )}
    </div>
  );
}

export default RightCol;
