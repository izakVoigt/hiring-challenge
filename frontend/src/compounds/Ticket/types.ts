import { TicketStatusEnum } from '@utils/enums/TicketStatus';

export interface ITicket {
  client: string;
  deadline: Date;
  id: string;
  index: number;
  issue: string;
  status: TicketStatusEnum;
}
