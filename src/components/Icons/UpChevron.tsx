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
        d="M8.00415 7.46409e-05C8.30429 7.46671e-05 8.59146 0.12228 8.79946 0.338831L15.696 7.51093C16.1186 7.9501 16.1048 8.64886 15.6654 9.0712C15.2262 9.49354 14.5277 9.48003 14.1054 9.04058L8.00415 2.69551L1.90294 9.04058C1.48088 9.47975 0.782396 9.49354 0.34295 9.0712C-0.0964965 8.64886 -0.110288 7.9501 0.312329 7.51093L7.20885 0.338831C7.41684 0.12228 7.70402 7.46147e-05 8.00415 7.46409e-05Z"
        fill="#023047"
      />
    </svg>
  );
};

export default SvgComponent;
