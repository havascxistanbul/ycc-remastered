import * as React from 'react';
import { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={10}
      height={17}
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.37933 8.50002C9.37933 8.80016 9.25712 9.08733 9.04057 9.29533L1.86818 16.1919C1.65438 16.3977 1.3788 16.5 1.10349 16.5C0.813833 16.5 0.52473 16.3866 0.308179 16.1612C-0.11444 15.7221 -0.100647 15.0236 0.3388 14.6012L6.68389 8.50002L0.3388 2.3988C-0.100647 1.97645 -0.11444 1.27797 0.308179 0.8388C0.730247 0.399353 1.42873 0.38556 1.86818 0.808179L9.04057 7.70471C9.25712 7.91271 9.37933 8.19988 9.37933 8.50002Z"
        fill="white"
      />
    </svg>
  );
};

export default SvgComponent;
