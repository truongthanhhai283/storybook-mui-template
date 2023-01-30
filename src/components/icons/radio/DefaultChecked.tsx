import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const RadioDefaultCheckedIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 12 12" fill="none" {...props}>
    <rect x="2" y="2" width="8" height="8" rx="4" fill="white" />
    <rect
      x="2"
      y="2"
      width="8"
      height="8"
      rx="4"
      stroke="#319795"
      strokeWidth="4"
    />
  </SvgIcon>
);

export default RadioDefaultCheckedIcon;
