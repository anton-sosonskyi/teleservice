import { FormControl, FormHelperText } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  variant?: "standard" | "outlined" | "filled" | undefined;
  placeholder?: string;
  optionList: { value: string; label: string }[];
};

export const FormSelect = <T extends FieldValues>({
  name,
  control,
  variant,
  placeholder,
  optionList,
}: Props<T>) => {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <>
            <Select
              onChange={(e) => field.onChange(e.target.value as T[keyof T])}
              style={{ height: 42 }}
              SelectDisplayProps={{
                style: { paddingTop: 8, paddingBottom: 8 },
              }}
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

            <FormHelperText error={fieldState.invalid}>
              {formState.errors[name]?.message as string}
            </FormHelperText>
          </>
        )}
      />
    </FormControl>
  );
};
