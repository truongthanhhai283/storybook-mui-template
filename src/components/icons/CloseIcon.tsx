import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const CloseIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fill="currentColor"
      d="m6.222 18.822-1.05-1.05 5.775-5.775-5.775-5.775 1.05-1.05 5.775 5.775 5.775-5.775 1.05 1.05-5.775 5.775 5.775 5.775-1.05 1.05-5.775-5.775-5.775 5.775Z"
    />
  </SvgIcon>
);

export default CloseIcon;
