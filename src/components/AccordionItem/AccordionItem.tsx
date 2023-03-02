import React from 'react';
import { clsx } from 'clsx';
import './styles.scss';
import { type QnaItem } from '../RightCol/types';
import { DownChevron, UpChevron } from '../Icons';

type AccordionItemProps = {
  index: number;
  activeItem: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
} & QnaItem;

function AccordionItem({ index, activeItem, setActiveItem, header, paragraph }: AccordionItemProps): JSX.Element {
  return (
    <button
      className="accordion-item"
      onClick={() => {
        setActiveItem((prev) => {
          return prev === index ? -1 : index;
        });
      }}
    >
      <div className="accordion-item__title">
        <h3>{header}</h3>
        {activeItem ? <UpChevron /> : <DownChevron />}
      </div>
      <p className={clsx('accordion-item__paragraph', !activeItem && 'hidden')}>{paragraph}</p>
    </button>
  );
}

export default AccordionItem;
