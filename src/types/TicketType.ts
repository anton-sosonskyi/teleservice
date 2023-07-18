export type Ticket = {
  id: number;
  subject: string;
  ticketType: string;
  device: string;
  contract: string;
  description: string;
  date: string;
  status: string;
}

export type TicketFormType = Omit<Ticket, "date" | "status" | "id">

export type TicketDetailsType = Ticket & {
  daysPass: string;
}
