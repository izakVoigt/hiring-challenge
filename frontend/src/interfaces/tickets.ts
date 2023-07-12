import { TicketStatusEnum } from '@utils/enums/TicketStatus';

export interface ITicket {
  __v: number;
  _id: string;
  createdAt: string;
  client: string;
  deadline: string;
  issue: string;
  status: TicketStatusEnum;
  updatedAt: string;
}
