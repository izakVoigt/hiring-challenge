import { TicketModel } from '@databases/schemas/ticket';
import { faker } from '@faker-js/faker';
import { TicketStatus } from '@utils/enums/ticketStatus';
import createError from 'http-errors';
import { TicketsService } from '../ticketsService';

describe('TicketsService', () => {
  let ticketsService: TicketsService;

  jest.mock('@databases/schemas/ticket', () => ({
    TicketModel: jest.fn().mockImplementation((data) => data),
  }));

  beforeEach(() => {
    ticketsService = new TicketsService();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createTicket', () => {
    it('should create a ticket', async () => {
      const body = {
        client: faker.person.fullName(),
        deadline: faker.date.anytime(),
        issue: faker.word.words(),
      };

      const savedTicket = {
        _id: faker.string.uuid(),
        _v: faker.string.uuid(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
        client: body.client,
        deadline: body.deadline,
        issue: body.issue,
        status: TicketStatus.OPEN,
      };

      jest.spyOn(TicketModel.prototype, 'save').mockResolvedValue(savedTicket);

      const result = await ticketsService.createTicket(body);

      expect(TicketModel.prototype.save).toHaveBeenCalled();
      expect(result).toEqual(savedTicket);
    });

    it('should handle error', async () => {
      const body = {
        client: faker.person.fullName(),
        deadline: faker.date.anytime(),
        issue: faker.word.words(),
      };

      const error = new Error('Database error');

      jest.spyOn(TicketModel.prototype, 'save').mockImplementation(() => {
        throw error;
      });
      jest.spyOn(ticketsService, 'handleError');

      try {
        await ticketsService.createTicket(body);
        expect(ticketsService.handleError).toHaveBeenCalledWith(error);
      } catch (err) {
        expect(ticketsService.handleError).toHaveBeenCalledWith(error);
      }
    });
  });

  describe('getTicketsList', () => {
    it('should return a list of tickets', async () => {
      const tickets = [
        {
          _id: faker.string.uuid(),
          _v: faker.string.uuid(),
          createdAt: faker.date.anytime(),
          updatedAt: faker.date.anytime(),
          client: faker.person.fullName(),
          deadline: faker.date.anytime(),
          issue: faker.word.words(),
          status: TicketStatus.OPEN,
        },
      ];

      jest.spyOn(TicketModel, 'find').mockReturnValue({
        sort: jest.fn().mockResolvedValue(tickets),
      } as any);

      const result = await ticketsService.getTicketsList();

      expect(TicketModel.find).toHaveBeenCalled();
      expect(result).toEqual(tickets);
    });

    it('should handle error', async () => {
      const error = new Error('Database error');

      jest.spyOn(ticketsService, 'handleError');

      jest.spyOn(TicketModel, 'find').mockImplementation(() => {
        throw error;
      });

      try {
        await ticketsService.getTicketsList();
        expect(ticketsService.handleError).toHaveBeenCalledWith(error);
      } catch (err) {
        expect(ticketsService.handleError).toHaveBeenCalledWith(error);
      }
    });
  });

  describe('updateTicket', () => {
    it('should update a ticket', async () => {
      const id = faker.string.uuid();
      const body = {
        client: faker.person.fullName(),
      };

      const existingTicket = {
        _id: id,
        _v: faker.string.uuid(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
        client: faker.person.fullName(),
        deadline: faker.date.anytime(),
        issue: faker.word.words(),
        status: TicketStatus.OPEN,
      };

      const updatedTicket = {
        _id: id,
        _v: existingTicket._v,
        createdAt: existingTicket.createdAt,
        updatedAt: existingTicket.updatedAt,
        client: body.client,
        deadline: existingTicket.deadline,
        issue: existingTicket.issue,
        status: existingTicket.status,
      };

      jest.spyOn(TicketModel, 'findById').mockResolvedValue(existingTicket);
      jest.spyOn(TicketModel, 'findOneAndUpdate').mockResolvedValue(updatedTicket);
      jest.spyOn(TicketModel, 'findById').mockResolvedValue(updatedTicket);

      const result = await ticketsService.updateTicket(id, body);

      expect(TicketModel.findById).toHaveBeenCalledWith(id);
      expect(TicketModel.findOneAndUpdate).toHaveBeenCalledWith({ _id: id }, body);
      expect(TicketModel.findById).toHaveBeenCalledWith(id);
      expect(result).toEqual(updatedTicket);
    });

    it('should handle error when ticket is not found', async () => {
      const id = faker.string.uuid();
      const body = {
        client: faker.person.fullName(),
      };

      jest.spyOn(TicketModel, 'findById').mockResolvedValue(null);

      try {
        await ticketsService.updateTicket(id, body);
        fail('Expected an error to be thrown');
      } catch (err) {
        expect(TicketModel.findById).toHaveBeenCalledWith(id);
        expect(err).toBeInstanceOf(createError.NotFound);
        // @ts-ignore
        expect(err.message).toBe('Ticket not found');
      }
    });
  });
});
