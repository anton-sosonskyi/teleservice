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
  multiline?: boolean;
  color?: string;
};

export const FormInput = <T extends FieldValues>({
  name,
  type,
  control,
  label,
  placeHolder,
  className,
  multiline,
  endAdornment,
  color,
}: Props<T>) => {
  
  return (
    <div className={`w-full ${className || ''}`}>
      <Controller
        name={name as Path<T>}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState, formState }) => (
          <TextField
            {...field}
            
            sx={{ 
              backgroundColor: `${color ? color : ''}`,
              '& .MuiInputBase-input': {"padding-top": "10px"}
            }}
            
            placeholder={placeHolder}
            variant="filled"
            type={type}
            label={label}
            required
            multiline={multiline}
            rows={4}
            error={fieldState.invalid}
            helperText={formState.errors[name]?.message as string}
            InputProps={{ endAdornment }}
            fullWidth
          />
        )}
      />
    </div>
  );
};
