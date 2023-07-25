import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "src/components/Button";
import { FormInput } from "src/components/FormInput";
import { useStore } from "src/store/store";
import { Ticket, TicketFormType } from "src/types/TicketType";
import { validationSchema } from "./NewTicketForm.schema";
import { getCreationTime } from "src/helpers/helpers";
import { useNavigate } from "react-router-dom";
import { FormSelect } from "src/components/FormSelect";

const initialValues = {
  subject: "",
  ticketType: "",
  device: "",
  contract: "",
  description: "",
};

const ticketTypeOptions = [
  { value: "questions", label: "Questions" },
  { value: "broken", label: "Device Broken" },
  { value: "stolen", label: "Device Lost or Stolen" },
  { value: "return", label: "Return Device" },
  { value: "contract", label: "Contract and Sim Card" },
];

const contractOptions = [
  { value: "contract1", label: "Some profitable contract1" },
  { value: "contract2", label: "Some profitable contract2" },
];

const customTheme = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
        underline: {
          "&:after": {
            borderColor: "#198D99",
          },
          "&:before": {
            borderColor: "#198D99",
          },
          "&&:hover::before": {
            borderColor: "#198D99",
          },
        },
      },
    },
  },
});

export const NewTicketForm = () => {
  const navigate = useNavigate();
  const userDevices = useStore((state) => state.userDevices);
  const setTicket = useStore((state) => state.setTicket);
  
  const { control, handleSubmit } = useForm<TicketFormType>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const userDevicesOptions = useMemo(
    () =>
      userDevices.map((device) => ({
        value: device.model,
        label: device.model,
      })),
    [userDevices]
  );

  const onSubmit = (data: TicketFormType) => {
    const newTicket: Ticket = {
      ...data,
      id: 1,
      date: getCreationTime(),
      status: "New",
    }
    
    setTicket(newTicket);
    navigate(`/support/ticket/${newTicket.id}`, {relative: "route"})
  };

  return (
    <ThemeProvider theme={customTheme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[24px]">
          <FormInput
            control={control}
            name="subject"
            type="text"
            placeHolder="Subject"
          />

          <FormSelect
            control={control}
            name="ticketType"
            variant="filled"
            placeholder="Ticket Type"
            optionList={ticketTypeOptions}
          />

          <FormSelect
            control={control}
            name="device"
            variant="filled"
            placeholder="Device"
            optionList={userDevicesOptions}
          />

          <FormSelect
            control={control}
            name="contract"
            variant="filled"
            placeholder="Contract"
            optionList={contractOptions}
          />

          <FormInput
            control={control}
            name="description"
            multiline
            type="text"
            placeHolder="Description of the ticket"
          />

          <Button
            type="submit"
            className="w-full h-[48px] hover:shadow-lg bg-azure text-[#fefefe] text-base font-bold"
          >
            Open Ticket
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
};
