import React, { useState } from 'react';
import { AccordionItem } from '../AccordionItem';
import { type QnaItem } from '../RightCol/types';
import './styles.scss';

interface AccordionTypes {
  items: QnaItem[];
}

function Accordion({ items }: AccordionTypes): JSX.Element {
  const [activeItem, setActiveItem] = useState(-1);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          activeItem={activeItem === index}
          setActiveItem={setActiveItem}
          header={item.header}
          paragraph={item.paragraph}
        />
      ))}
    </div>
  );
}

export default Accordion;
