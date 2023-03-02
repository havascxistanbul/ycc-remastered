import * as React from 'react';
import { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width={11}
      height={18}
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1707 15.8639C10.6647 16.339 10.6803 17.1248 10.2051 17.6192C9.96149 17.8724 9.63594 18 9.31007 18C9.00035 18 8.69062 17.8852 8.44979 17.6537L0.380795 9.895C0.137483 9.661 0 9.33762 0 8.99996C0 8.66262 0.137483 8.33924 0.380795 8.10524L8.44979 0.346585C8.94386 -0.128555 9.72997 -0.113348 10.2051 0.381033C10.6803 0.875414 10.6647 1.66121 10.1707 2.13635L3.03239 8.99996L10.1707 15.8639Z"
        fill="#999999"
      />
    </svg>
  );
};

export default SvgComponent;
