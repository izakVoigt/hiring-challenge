import { TicketStatusEnum } from '../../utils/enums/TicketStatus';

export interface ITicketStatus {
  deadline: Date;
  id: string;
  status: TicketStatusEnum;
}
