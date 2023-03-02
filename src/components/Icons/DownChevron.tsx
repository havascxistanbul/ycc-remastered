import * as React from 'react';
import { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={17}
      height={10}
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00391 9.3792C7.70377 9.3792 7.4166 9.25699 7.2086 9.04044L0.312085 1.86834C-0.110534 1.42917 -0.0967408 0.730415 0.342705 0.308072C0.781875 -0.11427 1.48035 -0.100753 1.9027 0.338693L8.00391 6.68376L14.1051 0.338693C14.5272 -0.100477 15.2257 -0.11427 15.6651 0.308072C16.1046 0.730415 16.1183 1.42917 15.6957 1.86834L8.79921 9.04044C8.59121 9.25699 8.30404 9.3792 8.00391 9.3792Z"
        fill="#023047"
      />
    </svg>
  );
};

export default SvgComponent;
