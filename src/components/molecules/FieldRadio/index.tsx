import type { FormControlLabelProps } from "@mui/material/FormControlLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { forwardRef } from "react";

import type { RadioProps } from "@/components/atoms/Radio";
import Radio from "@/components/atoms/Radio";

export interface FieldRadioProps extends RadioProps {
  label: FormControlLabelProps["label"];
  rootSx?: FormControlLabelProps["sx"];
}

const FieldRadio = forwardRef<HTMLInputElement, FieldRadioProps>(
  function FieldRadio(props, ref) {
    const { label, rootSx, ...radioProps } = props;
    return (
      <FormControlLabel
        label={label}
        sx={rootSx}
        control={<Radio inputRef={ref} {...radioProps} />}
      />
    );
  }
);

export default FieldRadio;
