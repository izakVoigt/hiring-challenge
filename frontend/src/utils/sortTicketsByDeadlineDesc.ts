import { ITicket } from '@interfaces';

export const sortTicketsByDeadlineDesc = (tickets: ITicket[]) => {
  return tickets.sort((a, b) => new Date(b.deadline).getTime() - new Date(a.deadline).getTime());
};
