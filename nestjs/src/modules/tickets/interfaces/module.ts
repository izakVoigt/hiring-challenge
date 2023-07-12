import { CreateTicketDto, UpdateTicketDto } from '../dto';
import { ITicket } from './ticket';

export interface ITicketModule {
  create: (dto: CreateTicketDto) => Promise<{ ticket: ITicket }>;
  getList: () => Promise<{ list: ITicket[] }>;
  update: (id: string, dto: UpdateTicketDto) => Promise<{ ticket: ITicket }>;
}
