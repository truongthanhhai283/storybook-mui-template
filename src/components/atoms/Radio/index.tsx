import MuiRadio from "@mui/material/Radio";
import type { RadioProps as MuiRadioProps } from "@mui/material/Radio";

import RadioDefaultIcon from "@/components/icons/radio/Default";
import RadioDefaultCheckedIcon from "@/components/icons/radio/DefaultChecked";
import RadioDisabledIcon from "@/components/icons/radio/Disabled";
import RadioDisabledCheckedIcon from "@/components/icons/radio/DisabledChecked";

export type RadioProps = Pick<
  MuiRadioProps,
  | "classes"
  | "size"
  | "disabled"
  | "checked"
  | "defaultChecked"
  | "sx"
  | "value"
  | "onChange"
  | "inputProps"
  | "name"
  | "inputRef"
>;

const Icon = <RadioDefaultIcon />;
const CheckedIcon = <RadioDefaultCheckedIcon />;
const DisabledIcon = <RadioDisabledIcon />;
const DisabledCheckedIcon = <RadioDisabledCheckedIcon />;

function Radio(props: RadioProps) {
  let icon = Icon;
  let checkedIcon = CheckedIcon;

  if (props.disabled) {
    icon = DisabledIcon;
    checkedIcon = DisabledCheckedIcon;
  }

  return <MuiRadio {...props} icon={icon} checkedIcon={checkedIcon} />;
}

export default Radio;
