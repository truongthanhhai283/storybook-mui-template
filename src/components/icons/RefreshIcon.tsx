import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const RefreshIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 10 10" {...props}>
    <path
      fill="currentColor"
      d="M2.266 7.575a3.795 3.795 0 0 1 .078-5.25 3.703 3.703 0 0 1 2.081-1.059L4.383 0a4.946 4.946 0 0 0-2.925 1.433c-1.92 1.933-1.943 5.055-.075 7.031L.322 9.533l3.36.183-.01-3.557-1.406 1.416ZM6.319.284l.009 3.557 1.406-1.416c1.38 1.484 1.355 3.808-.078 5.25a3.701 3.701 0 0 1-2.081 1.059L5.617 10a4.952 4.952 0 0 0 2.925-1.433c1.92-1.934 1.943-5.056.075-7.031L9.678.466 6.318.284Z"
    />
  </SvgIcon>
);

export default RefreshIcon;
