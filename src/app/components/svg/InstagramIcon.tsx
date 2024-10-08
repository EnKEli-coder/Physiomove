import { SVGIconProps } from "./svg.types";

const InstagramIcon = ({
  width = "36px",
  height = "36px",
  color = "black",
  ...otheProps
}: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      {...otheProps}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_236_51)">
      <path d="M6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6H24C25.5913 6 27.1174 6.63214 28.2426 7.75736C29.3679 8.88258 30 10.4087 30 12V24C30 25.5913 29.3679 27.1174 28.2426 28.2426C27.1174 29.3679 25.5913 30 24 30H12C10.4087 30 8.88258 29.3679 7.75736 28.2426C6.63214 27.1174 6 25.5913 6 24V12Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 18C13.5 19.1935 13.9741 20.3381 14.818 21.182C15.6619 22.0259 16.8065 22.5 18 22.5C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18C22.5 16.8065 22.0259 15.6619 21.182 14.818C20.3381 13.9741 19.1935 13.5 18 13.5C16.8065 13.5 15.6619 13.9741 14.818 14.818C13.9741 15.6619 13.5 16.8065 13.5 18Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.75 11.25V11.2642" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_236_51">
      <rect width="36" height="36" fill="white"/>
      </clipPath>
      </defs>

    </svg>
  );
};

export default InstagramIcon;