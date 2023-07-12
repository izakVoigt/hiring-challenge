import { faker } from '@faker-js/faker';
import { createTicketSchema, ICreateTicket } from '../schemas';

describe('createTicketSchema', () => {
  it('should validate a valid create ticket object', () => {
    const validTicket: ICreateTicket = {
      client: faker.person.fullName(),
      deadline: faker.date.anytime(),
      issue: faker.word.words(),
    };

    const { error } = createTicketSchema.validate(validTicket);

    expect(error).toBeUndefined();
  });

  it('should require the client field', () => {
    const invalidTicket = {
      deadline: faker.date.anytime(),
      issue: faker.word.words(),
    } as ICreateTicket;

    const { error } = createTicketSchema.validate(invalidTicket);

    expect(error).toBeDefined();
    expect(error?.details[0].path).toEqual(['client']);
  });

  it('should require the deadline field', () => {
    const invalidTicket = {
      client: faker.person.fullName(),
      issue: faker.word.words(),
    } as ICreateTicket;

    const { error } = createTicketSchema.validate(invalidTicket);

    expect(error).toBeDefined();
    expect(error?.details[0].path).toEqual(['deadline']);
  });

  it('should require the issue field', () => {
    const invalidTicket = {
      client: faker.person.fullName(),
      deadline: faker.date.anytime(),
    } as ICreateTicket;

    const { error } = createTicketSchema.validate(invalidTicket);

    expect(error).toBeDefined();
    expect(error?.details[0].path).toEqual(['issue']);
  });
});
