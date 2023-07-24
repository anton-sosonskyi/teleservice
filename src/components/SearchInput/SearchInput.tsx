import { Input } from "@mui/base";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: string;
  control: Control<T>;
  label?: string;
  placeHolder?: string;
  className?: string;
};

export const SearchInput = <T extends FieldValues>({
  name,
  control,
  label,
  placeHolder,
  className,
}: Props<T>) => {
  return (
    <div className={`w-full relative ${className}`}>
      <Controller
        name={name as Path<T>}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState, formState }) => (
          <Input
            {...field}
            type="text"
            slotProps={{
              input: {
                className:
                  "w-80 text-sm font-normal leading-5 px-3 py-2  focus:shadow-outline-purple  focus:shadow-lg  focus-visible:outline-0",
              },
            }}
            aria-label="Search input"
            placeholder={placeHolder}
            error={fieldState.invalid}
            endAdornment={
              <InputAdornment
                position="end"
                className="absolute top-[18px] right-[2px] flex justify-center items-center"
              >
                <SearchIcon fontSize="medium" />
              </InputAdornment>
            }
          />
        )}
      />
    </div>
  );
};
