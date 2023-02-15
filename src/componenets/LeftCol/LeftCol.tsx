import React from 'react';
import './styles.scss';

interface LeftColProps {
  src: string;
}
function LeftCol({ src }: LeftColProps): JSX.Element {
  console.log(src);

  return (
    <div className="left-col">
      <img
        src="https://picsum.photos/670/832"
        alt=""
      />
    </div>
  );
}

export default LeftCol;
