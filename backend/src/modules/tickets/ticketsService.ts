import { TicketModel } from '@databases/schemas/ticket';
import { TicketStatusIndex } from '@utils/enums/ticketStatus';
import createError from 'http-errors';
import { ICreateTicket, IUpdateTicket } from './schemas';

export class TicketsService {
  public async createTicket(body: ICreateTicket) {
    try {
      const newTicket = new TicketModel(body);

      return await newTicket.save();
    } catch (error) {
      this.handleError(error);
    }
  }

  public async getTicketsList() {
    try {
      return await TicketModel.find().sort({ deadline: -1 });
    } catch (error) {
      this.handleError(error);
    }
  }

  public async updateTicket(id: string, body: IUpdateTicket) {
    try {
      const ticket = await TicketModel.findById(id);

      if (!ticket) throw new createError.NotFound('Ticket not found');

      await TicketModel.findOneAndUpdate(
        { _id: id },
        {
          client: body.client,
          deadline: body.deadline,
          issue: body.issue,
          status: body.status ? TicketStatusIndex[body.status.toLowerCase()] : undefined,
        },
      );

      return await TicketModel.findById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  public handleError(error: unknown) {
    if (error instanceof createError.HttpError) {
      throw error;
    } else {
      console.error(error);
      throw new createError.InternalServerError('Internal server error');
    }
  }
}
