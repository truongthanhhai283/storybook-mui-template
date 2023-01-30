import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const RadioDefaultIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 12 12" fill="none" {...props}>
    <rect x="1" y="1" width="10" height="10" rx="5" fill="white" />
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

export default RadioDefaultIcon;
