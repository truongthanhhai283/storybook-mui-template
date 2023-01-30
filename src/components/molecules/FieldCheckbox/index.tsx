import type { FormControlLabelProps } from "@mui/material/FormControlLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { forwardRef } from "react";

import type { CheckboxProps } from "@/components/atoms/Checkbox";
import Checkbox from "@/components/atoms/Checkbox";

export interface FieldCheckboxProps extends CheckboxProps {
  label: FormControlLabelProps["label"];
  rootSx?: FormControlLabelProps["sx"];
}

const FieldCheckbox = forwardRef<HTMLInputElement, FieldCheckboxProps>(
  function FieldCheckbox(props, ref) {
    const { label, rootSx, ...checkboxProps } = props;
    return (
      <FormControlLabel
        label={label}
        sx={rootSx}
        control={<Checkbox inputRef={ref} {...checkboxProps} />}
      />
    );
  }
);

export default FieldCheckbox;
