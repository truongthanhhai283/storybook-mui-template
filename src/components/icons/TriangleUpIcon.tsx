import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const TriangleUpIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 8 4" fill="none" {...props}>
    <path fill="currentColor" d="M8 4H0l4-4 4 4Z" />
  </SvgIcon>
);

export default TriangleUpIcon;
