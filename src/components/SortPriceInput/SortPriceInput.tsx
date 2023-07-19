import Select from "@mui/base/Select";
import { Option } from "./Option";
import { SelectOption } from "@mui/base";

const renderValue = (option: SelectOption<string> | null) => {
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

type Props = {
  value: string;
  optionList: { value: string; label: string }[];
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const SortPriceInput: React.FC<Props> = ({
  value,
  onBlur,
  onChange,
  onFocus,
  optionList,
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
      renderValue={renderValue}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {optionList.map((option) => (
        <Option key={option.value} value={option.value}>
          <span className="text-azure">{option.label}</span>
        </Option>
      ))}
    </Select>
  );
};
