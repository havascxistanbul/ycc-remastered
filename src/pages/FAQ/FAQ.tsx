import React from 'react';
import { Content, LeftCol, RightCol, FaqAnimation } from '../../components';
import { Main } from '../../layout';
import { data } from './data';

function FAQ(): JSX.Element {
  const tempFaq = [
    {
      header: 'Question',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Fermentum in dictum venenatis iaculis consectetur massa congue. Risus sapien integer tristique condimentum. In aliquam posuere lacus vestibulum donec arcu. Facilisis pellentesque sed eu enim ipsum quisque. Massa feugiat cum neque nunc.',
    },
    {
      header: 'Question',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Fermentum in dictum venenatis iaculis consectetur massa congue. Risus sapien integer tristique condimentum. In aliquam posuere lacus vestibulum donec arcu. Facilisis pellentesque sed eu enim ipsum quisque. Massa feugiat cum neque nunc.',
    },
    {
      header: 'Question',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Fermentum in dictum venenatis iaculis consectetur massa congue. Risus sapien integer tristique condimentum. In aliquam posuere lacus vestibulum donec arcu. Facilisis pellentesque sed eu enim ipsum quisque. Massa feugiat cum neque nunc.',
    },
    {
      header: 'Question',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Fermentum in dictum venenatis iaculis consectetur massa congue. Risus sapien integer tristique condimentum. In aliquam posuere lacus vestibulum donec arcu. Facilisis pellentesque sed eu enim ipsum quisque. Massa feugiat cum neque nunc.',
    },
    {
      header: 'Question',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Fermentum in dictum venenatis iaculis consectetur massa congue. Risus sapien integer tristique condimentum. In aliquam posuere lacus vestibulum donec arcu. Facilisis pellentesque sed eu enim ipsum quisque. Massa feugiat cum neque nunc.',
    },
    {
      header: 'Question',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Fermentum in dictum venenatis iaculis consectetur massa congue. Risus sapien integer tristique condimentum. In aliquam posuere lacus vestibulum donec arcu. Facilisis pellentesque sed eu enim ipsum quisque. Massa feugiat cum neque nunc.',
    },
    {
      header: 'Question',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur. Fermentum in dictum venenatis iaculis consectetur massa congue. Risus sapien integer tristique condimentum. In aliquam posuere lacus vestibulum donec arcu. Facilisis pellentesque sed eu enim ipsum quisque. Massa feugiat cum neque nunc.',
    },
  ];
  const tempTitle = 'Frequently Asked Questions';

  return (
    <Main>
      <Content>
        <LeftCol>
          <FaqAnimation />
        </LeftCol>
        <RightCol
          header={tempTitle}
          paragraph={data.rightCol.paragraph}
          qna={tempFaq}
        />
      </Content>
    </Main>
  );
}

export default FAQ;
