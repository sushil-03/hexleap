export const CardSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      width="273"
      height="640"
      viewBox="0 0 273 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_2_18)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4H265V432C259.477 432 255 436.477 255 442C255 447.523 259.477 452 265 452V628H8V452C13.5228 452 18 447.523 18 442C18 436.477 13.5228 432 8 432V4Z"
          className=" dark:fill-[#3B3E47] fill-white"
        />
      </g>
      <line
        x1="31"
        y1="441.52"
        x2="242"
        y2="441.52"
        stroke="#818A97"
        strokeWidth="0.959843"
        strokeDasharray="5.76 5.76"
      />
      <defs>
        <filter
          id="filter0_d_2_18"
          x="0"
          y="0"
          width="273"
          height="640"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_18"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_18"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
