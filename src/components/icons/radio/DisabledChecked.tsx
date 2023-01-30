import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const RadioDisabledCheckedIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 12 12" fill="none" {...props}>
    <rect x="1" y="1" width="10" height="10" rx="5" fill="#E2E8F0" />
    <rect x="4" y="4" width="4" height="4" rx="2" fill="#718096" />
    <rect
      x="1"
      y="1"
      width="10"
      height="10"
      rx="5"
      stroke="#E2E8F0"
      strokeWidth="2"
    />
  </SvgIcon>
);

export default RadioDisabledCheckedIcon;
