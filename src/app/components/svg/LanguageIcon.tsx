import { SVGIconProps } from "./svg.types";

const LanguageIcon = ({
  width = "40px",
  height = "40x",
  color = "black",
  ...otheProps
}: SVGIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      {...otheProps}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_289_225)">
      <path d="M6.66669 8.33337H18.3334" stroke="#0987BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 5V8.33333C15 15.6967 11.2684 21.6667 6.66669 21.6667" stroke="#0987BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.33331 15C8.33331 18.5733 13.2533 21.5133 19.5 21.6667" stroke="#0987BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 33.3334L26.6667 18.3334L33.3333 33.3334" stroke="#0987BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31.8333 30H21.5" stroke="#0987BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_289_225">
      <rect width="40" height="40" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
};

export default LanguageIcon;

