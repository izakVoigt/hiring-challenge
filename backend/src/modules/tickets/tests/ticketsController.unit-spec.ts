import { faker } from '@faker-js/faker';
import { TicketStatus } from '@utils/enums/ticketStatus';
import { Request, Response } from 'express';
import createError from 'http-errors';
import TicketsController from '../ticketsController';
import { TicketsService } from '../ticketsService';

describe('TicketsController unitary test', () => {
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('createTicket', () => {
    it('should create a new ticket and return a response with status 201', async () => {
      const mockRequest = {
        body: {
          client: faker.person.fullName(),
          deadline: faker.date.anytime(),
          issue: faker.word.words(),
        },
      };

      const ticket = {
        _id: faker.string.uuid(),
        _v: faker.number.int(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
        client: mockRequest.body.client,
        deadline: mockRequest.body.deadline,
        issue: mockRequest.body.issue,
        status: TicketStatus.OPEN,
      };

      const mockCreateTicket = jest.fn().mockResolvedValueOnce(ticket);
      TicketsService.prototype.createTicket = mockCreateTicket;

      await TicketsController.createTicket(mockRequest as Request, mockResponse as Response);

      expect(mockCreateTicket).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith({ ticket });
    });

    it('should handle error and return a response with status 500', async () => {
      const mockRequest = {
        body: {
          client: faker.person.fullName(),
          deadline: faker.date.anytime(),
          issue: faker.word.words(),
        },
      };

      const error = new Error('Database error');
      const mockCreateTicket = jest.fn().mockRejectedValueOnce(error);
      TicketsService.prototype.createTicket = mockCreateTicket;
      const mockHandleError = jest.spyOn(TicketsController, 'handleError');

      await TicketsController.createTicket(mockRequest as Request, mockResponse as Response);

      expect(mockCreateTicket).toHaveBeenCalled();
      expect(mockHandleError).toHaveBeenCalledWith(error, mockResponse as Response);
    });
  });

  describe('getTicketsList', () => {
    it('should return a list of tickets with status 200', async () => {
      const mockRequest = {};

      const ticket = {
        _id: faker.string.uuid(),
        _v: faker.number.int(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
        client: faker.person.fullName(),
        deadline: faker.date.anytime(),
        issue: faker.word.words(),
        status: TicketStatus.OPEN,
      };

      const mockGetTicketsList = jest.fn().mockResolvedValueOnce([{ ...ticket }]);
      TicketsService.prototype.getTicketsList = mockGetTicketsList;

      await TicketsController.getTicketsList(mockRequest as Request, mockResponse as Response);

      expect(mockGetTicketsList).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ list: [{ ...ticket }] });
    });

    it('should handle error and return a response with status 500', async () => {
      const mockRequest = {};
      const error = new Error('Database error');
      const mockGetTicketsList = jest.fn().mockRejectedValueOnce(error);
      TicketsService.prototype.getTicketsList = mockGetTicketsList;
      const mockHandleError = jest.spyOn(TicketsController, 'handleError');

      await TicketsController.getTicketsList(mockRequest as Request, mockResponse as Response);

      expect(mockGetTicketsList).toHaveBeenCalled();
      expect(mockHandleError).toHaveBeenCalledWith(error, mockResponse as Response);
    });
  });

  describe('updateTicket', () => {
    it('should update a ticket and return a response with status 200', async () => {
      const mockRequest = {
        body: {
          client: faker.person.firstName(),
        },
        params: {
          id: faker.string.uuid(),
        },
      };

      const ticket = {
        _id: mockRequest.params.id,
        _v: faker.number.int(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
        client: mockRequest.body.client,
        deadline: faker.date.anytime(),
        issue: faker.word.words(),
        status: TicketStatus.OPEN,
      };

      const mockUpdateTicket = jest.fn().mockResolvedValueOnce({ ...ticket });
      TicketsService.prototype.updateTicket = mockUpdateTicket;

      await TicketsController.updateTicket(mockRequest as unknown as Request, mockResponse as Response);

      expect(mockUpdateTicket).toHaveBeenCalledWith(mockRequest.params.id, mockRequest.body);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ ticket: { ...ticket } });
    });

    it('should handle error when ticket is not found and return a response with status 404', async () => {
      const mockRequest = {
        body: {
          client: faker.person.firstName(),
        },
        params: {
          id: faker.string.uuid(),
        },
      };

      const error = new createError.NotFound('Ticket not found');
      const mockUpdateTicket = jest.fn().mockRejectedValueOnce(error);
      TicketsService.prototype.updateTicket = mockUpdateTicket;
      const mockHandleError = jest.spyOn(TicketsController, 'handleError');

      await TicketsController.updateTicket(mockRequest as unknown as Request, mockResponse as Response);

      expect(mockUpdateTicket).toHaveBeenCalledWith(mockRequest.params.id, mockRequest.body);
      expect(mockHandleError).toHaveBeenCalledWith(error, mockResponse as Response);
    });

    it('should handle error and return a response with status 500', async () => {
      const mockRequest = {
        body: {
          client: faker.person.firstName(),
        },
        params: {
          id: faker.string.uuid(),
        },
      };

      const error = new Error('Database error');
      const mockUpdateTicket = jest.fn().mockRejectedValueOnce(error);
      TicketsService.prototype.updateTicket = mockUpdateTicket;
      const mockHandleError = jest.spyOn(TicketsController, 'handleError');

      await TicketsController.updateTicket(mockRequest as unknown as Request, mockResponse as Response);

      expect(mockUpdateTicket).toHaveBeenCalledWith(mockRequest.params.id, mockRequest.body);
      expect(mockHandleError).toHaveBeenCalledWith(error, mockResponse as Response);
    });
  });
});
