import { TicketStatus } from '@utils/enums/ticketStatus';
import Joi from 'joi';

export interface IUpdateTicket {
  client?: string;
  deadline?: Date;
  issue?: string;
  status?: string;
}

export const updateTicketSchema = Joi.object<IUpdateTicket>({
  client: Joi.string().optional(),
  deadline: Joi.date().iso().optional(),
  issue: Joi.string().optional(),
  status: Joi.string()
    .valid(...Object.values(TicketStatus))
    .optional(),
}).required();
