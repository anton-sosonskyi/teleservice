import Select, { SelectProps } from "@mui/base/Select";
import { Option } from "./Option";
import { SelectOption } from "@mui/base";

const renderValue = (option: SelectOption<OptionType> | null) => {
  if (option == null) {
    return <span>Sort by</span>;
  }

  return (
    <>
      Price:
      <span className="text-azure">{option.label}</span>
    </>
  );
};

type OptionType = { value: string; label: string };
type SelectType = SelectProps<OptionType, false>;

type Props = {
  value?: OptionType;
  onChange?: SelectType["onChange"];
  onFocus?: SelectType["onFocus"];
  onBlur?: SelectType["onBlur"];
};

export const SortPriceInput: React.FC<Props> = ({
  value,
  onBlur,
  onChange,
  onFocus,
}) => {
  return (
    <Select
      slotProps={{
        root: ({ focusVisible, open }) => ({
          className: `text-sm box-border h-[30px] w-fit py-[9px] pl-[10px] pr-[6px] flex justify-between items-center gap-[4px] text-left leading-normal bg-[#fff] shadow-sm
           text-[#757474] transition-all hover:bg-slate-50 dark:hover:bg-slate-700 outline-0 ${
             focusVisible ? "border-purple-400 shadow-outline-purple" : ""
           } ${
            open ? 'after:content-["▴"]' : 'after:content-["▾"]'
          } after:float-right`,
        }),
        listbox: {
          className: `text-sm p-1.5 my-3 w-80 overflow-auto outline-0 bg-[#fff] dark:bg-slate-900 dark:border-slate-700 text-slate-900 dark:text-slate-300 shadow shadow-slate-200 dark:shadow-slate-900`,
        },
      }}
      value={value || null}
      renderValue={renderValue}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    >
       <Option value="price-low">
          <span className="text-azure">Low to High</span>
        </Option>

       <Option value="price-high">
          <span className="text-azure">High to Low</span>
        </Option>
    </Select>
  );
};
