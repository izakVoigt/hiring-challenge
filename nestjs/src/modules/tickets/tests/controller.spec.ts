import { faker } from '@faker-js/faker';
import { Test } from '@nestjs/testing';
import { CreateTicketDto, UpdateTicketDto } from '../dto';
import { ITicket } from '../interfaces';
import { TicketStatusEnum } from '../../../utils/enums/ticketStatus';
import { TicketsController } from '../tickets.controller';
import { TicketsService } from '../tickets.service';

describe('Controller test', () => {
  let controller: TicketsController;
  let service: TicketsService;

  const mockTicketsService = {
    create: jest.fn(),
    getList: jest.fn(),
    update: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TicketsController],
      providers: [TicketsService],
    })
      .overrideProvider(TicketsService)
      .useValue(mockTicketsService)
      .compile();

    controller = moduleRef.get<TicketsController>(TicketsController);
    service = moduleRef.get<TicketsService>(TicketsService);
  });

  const expectedResult = {
    __v: faker.number.int(),
    _id: faker.string.uuid(),
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
    client: faker.person.fullName(),
    deadline: faker.date.anytime(),
    issue: faker.word.words(),
    status: TicketStatusEnum.OPEN,
  } as unknown as ITicket;

  it('should create a new ticket', async () => {
    const dto: CreateTicketDto = {
      client: faker.person.fullName(),
      deadline: String(faker.date.anytime()),
      issue: faker.word.words(),
    };

    jest.spyOn(service, 'create').mockResolvedValue({ ticket: expectedResult });

    const result = await controller.create(dto);

    expect(service.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual({ ticket: expectedResult });
  });

  it('should get a tickets list', async () => {
    jest.spyOn(service, 'getList').mockResolvedValue({ list: [expectedResult] });

    const result = await controller.getList();

    expect(service.getList).toHaveBeenCalled();
    expect(result).toEqual({ list: [expectedResult] });
  });

  it('should update a ticket', async () => {
    const dto: UpdateTicketDto = {
      client: faker.person.fullName(),
    };
    const id: string = faker.string.uuid();

    jest.spyOn(service, 'update').mockResolvedValue({ ticket: expectedResult });

    const result = await controller.update(id, dto);

    expect(service.update).toHaveBeenCalledWith(id, dto);
    expect(result).toEqual({ ticket: expectedResult });
  });
});
