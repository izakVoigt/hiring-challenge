import { faker } from '@faker-js/faker';
import { TicketStatus } from '@utils/enums/ticketStatus';
import { updateTicketSchema, IUpdateTicket } from '../schemas';

describe('updateTicketSchema', () => {
  it('should validate a valid update ticket object', () => {
    const validTicket: IUpdateTicket = {
      client: faker.person.fullName(),
      deadline: faker.date.anytime(),
      issue: faker.word.words(),
      status: TicketStatus.OPEN,
    };

    const { error } = updateTicketSchema.validate(validTicket);

    expect(error).toBeUndefined();
  });

  it('should allow empty update ticket object', () => {
    const validTicket: IUpdateTicket = {};

    const { error } = updateTicketSchema.validate(validTicket);

    expect(error).toBeUndefined();
  });

  it('should validate the client field', () => {
    const invalidTicket = {
      client: faker.number.int(),
    } as unknown as IUpdateTicket;

    const { error } = updateTicketSchema.validate(invalidTicket);

    expect(error).toBeDefined();
    expect(error?.details[0].path).toEqual(['client']);
  });

  it('should validate the deadline field', () => {
    const invalidTicket = {
      deadline: faker.number.int(),
    } as unknown as IUpdateTicket;

    const { error } = updateTicketSchema.validate(invalidTicket);

    expect(error).toBeDefined();
    expect(error?.details[0].path).toEqual(['deadline']);
  });

  it('should validate the issue field', () => {
    const invalidTicket = {
      issue: faker.number.int(),
    } as unknown as IUpdateTicket;

    const { error } = updateTicketSchema.validate(invalidTicket);

    expect(error).toBeDefined();
    expect(error?.details[0].path).toEqual(['issue']);
  });

  it('should validate the status field', () => {
    const invalidTicket = {
      status: faker.word.words(),
    } as unknown as IUpdateTicket;

    const { error } = updateTicketSchema.validate(invalidTicket);

    expect(error).toBeDefined();
    expect(error?.details[0].path).toEqual(['status']);
  });
});
