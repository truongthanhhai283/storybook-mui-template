import MuiCheckbox from "@mui/material/Checkbox";
import type { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

import CheckboxDefaultIcon from "@/components/icons/checkbox/Default";
import CheckboxDefaultCheckedIcon from "@/components/icons/checkbox/DefaultChecked";
import CheckboxDisabledIcon from "@/components/icons/checkbox/Disabled";
import CheckboxDisabledCheckedIcon from "@/components/icons/checkbox/DisabledChecked";

type BaseProps = Pick<
  MuiCheckboxProps,
  | "classes"
  | "size"
  | "disabled"
  | "checked"
  | "defaultChecked"
  | "sx"
  | "value"
  | "onChange"
  | "inputProps"
  | "inputRef"
>;

export interface CheckboxProps extends BaseProps {
  isLoading?: boolean;
}

const Icon = <CheckboxDefaultIcon />;
const CheckedIcon = <CheckboxDefaultCheckedIcon />;
const DisabledIcon = <CheckboxDisabledIcon />;
const DisabledCheckedIcon = <CheckboxDisabledCheckedIcon />;

function Checkbox(props: CheckboxProps) {
  let icon = Icon;
  let checkedIcon = CheckedIcon;

  if (props.disabled) {
    icon = DisabledIcon;
    checkedIcon = DisabledCheckedIcon;
  }

  return <MuiCheckbox {...props} icon={icon} checkedIcon={checkedIcon} />;
}

export default Checkbox;
