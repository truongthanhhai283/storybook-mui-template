import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const CheckboxDisabledCheckedIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 12 12" fill="none" {...props}>
    <rect width="10" height="10" x="1" y="1" fill="#E2E8F0" rx="1" />
    <path
      fill="#718096"
      d="m5.332 7.057 3.064-3.065.472.472-3.536 3.535-2.121-2.121.471-.471 1.65 1.65Z"
    />
    <rect
      width="10"
      height="10"
      x="1"
      y="1"
      stroke="#E2E8F0"
      strokeWidth="2"
      rx="1"
    />
  </SvgIcon>
);

export default CheckboxDisabledCheckedIcon;
