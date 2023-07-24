import { FormControl, FormHelperText } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

type Props = {
  name: string;
  control: any;
  variant?: "standard" | "outlined" | "filled" | undefined;
  placeholder?: string;
  optionList: { value: string; label: string }[];
};

export const FormSelect: React.FC<Props> = ({
  name,
  control,
  variant,
  placeholder,
  optionList,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <FormControl>
          <Select
            {...field}
            style={{ height: 42 }}
            SelectDisplayProps={{ style: { paddingTop: 8, paddingBottom: 8 } }}
            variant={variant}
            value={field.value || ""}
            IconComponent={ArrowDownIcon}
            displayEmpty
            error={fieldState.invalid}
          >
            <MenuItem disabled value="">
              <span className="text-[#757474]">{placeholder}</span>
            </MenuItem>

            {optionList.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText error={!!formState.errors[name]?.message}>
            {formState.errors[name]?.message as string}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};
