import { faker } from '@faker-js/faker';
import { InternalServerErrorException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { MongoDBTicket } from '../../../databases/schemas/ticket';
import { TicketStatusEnum } from '../../../utils/enums/ticketStatus';
import { CreateTicketDto, UpdateTicketDto } from '../dto';
import { ITicket } from '../interfaces';
import { TicketsService } from '../tickets.service';

describe('TicketsService', () => {
  let ticketsService: TicketsService;
  let ticketModel: Model<MongoDBTicket>;

  const mockModel = {
    create: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        TicketsService,
        {
          provide: getModelToken(MongoDBTicket.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    jest.spyOn(console, 'error').mockImplementation(() => {});

    ticketsService = moduleRef.get<TicketsService>(TicketsService);
    ticketModel = moduleRef.get<Model<MongoDBTicket>>(getModelToken(MongoDBTicket.name));
  });

  const expectedTicket = {
    __v: faker.number.int(),
    _id: faker.string.uuid(),
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
    client: faker.person.fullName(),
    deadline: faker.date.anytime(),
    issue: faker.word.words(),
    status: TicketStatusEnum.OPEN,
  } as unknown as ITicket;

  describe('create', () => {
    const createTicketDto: CreateTicketDto = {
      client: faker.person.fullName(),
      deadline: String(faker.date.anytime()),
      issue: faker.word.words(),
    };

    it('should create a new ticket', async () => {
      jest.spyOn(ticketModel, 'create').mockResolvedValue(expectedTicket as any);

      const result = await ticketsService.create(createTicketDto);

      expect(ticketModel.create).toHaveBeenCalled();
      expect(result).toEqual({ ticket: expectedTicket });
    });

    it('should try to create a new ticket and return error', async () => {
      jest.spyOn(ticketModel, 'create').mockRejectedValue(new Error());

      await expect(ticketsService.create(createTicketDto)).rejects.toThrow(
        new InternalServerErrorException('Internal server error'),
      );
    });
  });

  describe('getList', () => {
    it('should return a list of tickets sorted by deadline', async () => {
      const expectedTicket = {
        __v: faker.number.int(),
        _id: faker.string.uuid(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
        client: faker.person.fullName(),
        deadline: faker.date.anytime(),
        issue: faker.word.words(),
        status: TicketStatusEnum.OPEN,
      } as unknown as ITicket;

      jest.spyOn(ticketModel, 'find').mockReturnValueOnce({
        sort: jest.fn().mockResolvedValueOnce([expectedTicket] as any),
      } as any);

      const result = await ticketsService.getList();

      expect(ticketModel.find).toHaveBeenCalled();
      expect(result).toEqual({ list: [expectedTicket] });
    });

    // it('should try to get the tickets list and return error', async () => {
    //   jest.spyOn(ticketModel, 'find').mockRejectedValue(new Error());

    //   await expect(ticketsService.getList()).rejects.toThrow(new InternalServerErrorException('Internal server error'));
    // });
  });

  describe('update', () => {
    const ticketId = faker.string.uuid();
    const updateTicketDto: UpdateTicketDto = {
      client: faker.person.fullName(),
    };

    it('should update a ticket', async () => {
      const updatedTicket = { ...expectedTicket, client: updateTicketDto.client } as unknown as ITicket;

      jest.spyOn(ticketModel, 'findById').mockResolvedValueOnce(expectedTicket as any);
      jest.spyOn(ticketModel, 'findByIdAndUpdate').mockResolvedValueOnce(updatedTicket as any);
      jest.spyOn(ticketModel, 'findById').mockResolvedValueOnce(updatedTicket as any);

      const result = await ticketsService.update(ticketId, updateTicketDto);

      expect(ticketModel.findById).toHaveBeenCalledWith(ticketId);
      expect(ticketModel.findByIdAndUpdate).toHaveBeenCalledWith(
        { _id: ticketId },
        {
          client: updateTicketDto.client,
          deadline: updateTicketDto.deadline,
          issue: updateTicketDto.issue,
          status: updateTicketDto.status,
        },
      );
      expect(result).toEqual({ ticket: updatedTicket });
    });
  });
});
