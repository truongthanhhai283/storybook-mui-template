import type { SxProps } from "@mui/material";
import type { RadioGroupProps as MuiRadioGroupProps } from "@mui/material/RadioGroup";
import MuiRadioGroup from "@mui/material/RadioGroup";

import FieldRadio from "../FieldRadio";

type Option = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export interface RadioGroupProps extends MuiRadioGroupProps {
  /**
   * The list of options to display on list radio inputs
   */
  options: Option[];
}

function RadioGroup(props: RadioGroupProps) {
  const { options, row = true, ...rest } = props;
  const fieldRadioStyles: SxProps = row
    ? { marginRight: 1 }
    : { marginBottom: 1 };

  return (
    <MuiRadioGroup row={row} {...rest}>
      {options.map((option) => (
        <FieldRadio key={option.value} rootSx={fieldRadioStyles} {...option} />
      ))}
    </MuiRadioGroup>
  );
}

export default RadioGroup;
