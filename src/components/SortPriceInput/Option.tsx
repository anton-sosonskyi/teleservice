import BaseOption, { OptionProps, OptionOwnerState } from '@mui/base/Option';
import classNames from 'classnames';
import React from "react";

const getOptionColorClasses = ({
  selected,
  highlighted,
  disabled,
}: Partial<OptionOwnerState<string>>) => {
  let classes = '';

  classes = classNames(
    " hover:bg-[#f5f4f4]",
    { " text-slate-400": disabled },
    { " bg-[#d3d3d3] text-purple-950": selected },
    { " bg-slate-100 text-slate-900": highlighted },
  );

  return classes;
};

export const Option = React.forwardRef<HTMLLIElement, OptionProps<string>>((props, ref) => {
  return (
    <BaseOption
      ref={ref}
      {...props}
      slotProps={{
        root: ({ selected, highlighted, disabled }) => ({
          className: `list-none p-2 rounded-lg cursor-default last-of-type:border-b-0 ${getOptionColorClasses(
            { selected, highlighted, disabled },
          )}`,
        }),
      }}
    />
  );
});
