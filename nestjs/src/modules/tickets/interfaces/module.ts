import { CreateTicketDto, UpdateTicketDto } from '../dto';
import { ITicket } from './ticket';

export interface ITicketModule {
  create: (dto: CreateTicketDto) => Promise<{ ticket: any }>;
  getList: () => Promise<{ list: any[] }>;
  update: (id: string, dto: UpdateTicketDto) => Promise<{ ticket: any }>;
}
