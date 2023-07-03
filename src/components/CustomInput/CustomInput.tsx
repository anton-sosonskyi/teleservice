import { TextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: string;
  control: Control<T>;
  type: string;
  label?: string;
  placeHolder?: string;
  className?: string;
  endAdornment?: React.ReactNode;
};

export const CustomInput = <T extends FieldValues>({
  name,
  type,
  control,
  label,
  placeHolder,
  className,
  endAdornment,
}: Props<T>) => {
  return (
    <div className={`w-full ${className}`}>
      <Controller
        name={name as Path<T>}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState, formState }) => (
          <TextField
            {...field}
            sx={{ width: "100%" }}
            placeholder={placeHolder}
            variant="filled"
            type={type}
            label={label}
            required
            error={fieldState.invalid}
            helperText={formState.errors[name]?.message as string}
            InputProps={type === "password" ? { endAdornment } : {}}
          />
        )}
      />
    </div>
  );
};
