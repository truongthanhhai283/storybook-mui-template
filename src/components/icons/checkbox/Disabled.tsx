import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const CheckboxDisabledIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 12 12" fill="none" {...props}>
    <rect width="10" height="10" x="1" y="1" fill="#E2E8F0" rx="1" />
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

export default CheckboxDisabledIcon;
