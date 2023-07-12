import { TicketStatusEnum } from '../../../utils/enums/ticketStatus';

export interface ITicket {
  __v: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
  client: string;
  deadline: string;
  issue: string;
  status: TicketStatusEnum;
}
