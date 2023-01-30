import MuiMenuItem from "@mui/material/MenuItem";
import type {
  SelectProps as MuiSelectProps,
  SelectChangeEvent,
} from "@mui/material/Select";
import MuiSelect, { selectClasses as baseClasses } from "@mui/material/Select";
import { styled } from "@mui/material/styles";

import OutlinedInputText from "@/components/atoms/OutlinedInputText";
import isEmptyArray from "@/utils/isEmptyArray";
import isEmptyString from "@/utils/isEmptyString";
import isNil from "@/utils/isNil";
import isNumber from "@/utils/isNumber";
import isString from "@/utils/isString";

type BaseProps<T = unknown> = Pick<
  MuiSelectProps<T>,
  | "classes"
  | "value"
  | "onChange"
  | "defaultValue"
  | "onBlur"
  | "onFocus"
  | "onInvalid"
  | "onKeyDown"
  | "onKeyUp"
  | "id"
  | "aria-describedby"
  | "autoFocus"
  | "disabled"
  | "error"
  | "fullWidth"
  | "inputRef"
  | "name"
  | "readOnly"
  | "sx"
  | "autoWidth"
  | "displayEmpty"
  | "labelId"
  | "multiple"
  | "renderValue"
  | "open"
  | "onClose"
  | "onOpen"
  | "MenuProps"
>;

type Option = {
  value: string | number;
  label: string;
};

interface SelectProps<T = unknown> extends BaseProps<T> {
  /**
   * The list of options to display on list menu items
   */
  options: Option[];
  /**
   * The size of input component
   */
  size?: "small" | "medium";
  /**
   * The placeholder of the select component
   */
  placeholder?: string;
}

const MenuProps: MuiSelectProps["MenuProps"] = {
  PaperProps: {
    style: {
      maxHeight: 250,
    },
  },
};

/**
 * Override Mui styles https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/Select/Select.js
 */
const StyledSelect = styled(MuiSelect)(({ size }) => {
  return {
    [`& .${baseClasses.select}`]: {
      ...(size === "small" && {
        height: 32,
      }),
      ...(size === "medium" && {
        height: 40,
      }),
    },
  };
}) as <T>(props: MuiSelectProps<T>) => JSX.Element;

function Select<T = unknown>(props: SelectProps<T>) {
  const { options, size = "small", placeholder, renderValue, ...rest } = props;

  const internalRenderValue: SelectProps<T>["renderValue"] = (selected) => {
    if (
      placeholder &&
      (isNil(selected) || isEmptyArray(selected) || isEmptyString(selected))
    ) {
      return <em>{placeholder}</em>;
    }

    if (renderValue) {
      return renderValue?.(selected);
    }

    if (Array.isArray(selected)) {
      return options
        .filter((option) => selected.includes(option.value))
        .map((option) => option.label)
        .join(", ");
    }

    if (isString(selected) || isNumber(selected)) {
      return options.find((option) => selected === option.value)?.label;
    }

    return undefined;
  };

  return (
    <StyledSelect
      MenuProps={MenuProps}
      displayEmpty={!!placeholder}
      renderValue={internalRenderValue}
      {...rest}
      input={<OutlinedInputText size={size} />}
    >
      {options.map((option) => (
        <MuiMenuItem key={option.value} value={option.value}>
          {option.label}
        </MuiMenuItem>
      ))}
    </StyledSelect>
  );
}

export default Select;

export type { SelectChangeEvent };
