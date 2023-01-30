import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const CheckboxDefaultCheckedIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 12 12" fill="none" {...props}>
    <rect width="12" height="12" fill="#319795" rx="2" />
    <path
      fill="#fff"
      d="m5.332 7.057 3.064-3.065.472.472-3.536 3.535-2.121-2.121.471-.471 1.65 1.65Z"
    />
  </SvgIcon>
);

export default CheckboxDefaultCheckedIcon;
