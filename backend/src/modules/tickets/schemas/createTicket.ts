import Joi from 'joi';

export interface ICreateTicket {
  client: string;
  deadline: Date;
  issue: string;
}

export const createTicketSchema = Joi.object<ICreateTicket>({
  client: Joi.string().required(),
  deadline: Joi.date().iso().required(),
  issue: Joi.string().required(),
}).required();
