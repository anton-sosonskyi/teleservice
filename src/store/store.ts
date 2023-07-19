import { data } from "src/features/devices/data/data";
import { Device } from "src/types/ProductType";
import { Ticket } from "src/types/TicketType";
import { create } from "zustand";

interface State {
  isAuth: boolean;
  userDevices: Device[];
  ticket: Ticket | null;
  authUser: (isAuth: boolean) => void;
  setTicket: (ticket: Ticket) => void;
}

export const useStore = create<State>((set) => ({
  isAuth: false,
  userDevices: [],
  ticket: null,
  authUser: (isAuth: boolean) => set(
    { 
      isAuth,
      userDevices: data,
    }
  ),
  setTicket: (ticket: Ticket) => set(state => ({
    ...state,
    ticket,
  })),
}));