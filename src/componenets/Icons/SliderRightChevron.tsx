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
        d="M0.932852 2.13611C0.438781 1.66097 0.423264 0.875176 0.898404 0.380795C1.14203 0.127553 1.46758 8.424e-07 1.79344 8.13912e-07C2.10317 7.86835e-07 2.41289 0.114829 2.65372 0.346347L10.7227 8.105C10.966 8.339 11.1035 8.66238 11.1035 9.00004C11.1035 9.33738 10.966 9.66076 10.7227 9.89476L2.65372 17.6534C2.15965 18.1286 1.37354 18.1133 0.898405 17.619C0.423265 17.1246 0.438783 16.3388 0.932854 15.8637L8.07112 9.00004L0.932852 2.13611Z"
        fill="#999999"
      />
    </svg>
  );
};

export default SvgComponent;
