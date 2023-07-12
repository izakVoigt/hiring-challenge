import { Request, Response } from 'express';
import createError from 'http-errors';
import { TicketsService } from './ticketsService';

class TicketsController {
  private service: TicketsService;

  constructor() {
    this.service = new TicketsService();
  }

  public createTicket = async (request: Request, response: Response) => {
    try {
      const { body } = request;

      const ticket = await this.service.createTicket(body);

      response.status(201).json({ ticket });
    } catch (error) {
      this.handleError(error, response);
    }
  };

  public getTicketsList = async (_: Request, response: Response) => {
    try {
      const list = await this.service.getTicketsList();

      response.status(200).json({ list });
    } catch (error) {
      this.handleError(error, response);
    }
  };

  public updateTicket = async (request: Request, response: Response) => {
    try {
      const { body, params } = request;
      const { id } = params;

      const ticket = await this.service.updateTicket(id, body);

      response.status(200).json({ ticket });
    } catch (error) {
      this.handleError(error, response);
    }
  };

  public handleError(error: any, response: Response) {
    if (error instanceof createError.HttpError) {
      response.status(error.statusCode).json({ message: error.message });
    } else {
      console.error(error);
      response.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default new TicketsController();
