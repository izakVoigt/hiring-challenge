import { ActionButton } from '@components';
import { faker } from '@faker-js/faker';
import { useTicket } from '@hooks';
import { createTicket } from '@services';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';
import moment from 'moment';

export const CreateRandomTicketButton = () => {
  const ticket = useTicket();

  const handleClick = async () => {
    try {
      const data = await createTicket({
        client: faker.person.fullName(),
        deadline: faker.date.between({
          from: moment().subtract(2, 'days').toDate(),
          to: moment().add(2, 'days').toDate(),
        }),
        issue: faker.word.words(),
      });

      ticket.AddItem(data.ticket);

      toast.success('Ticket created successfully');
    } catch (error) {
      toast.error('API call error');
    }
  };

  const debouncedHandleClick = useDebouncedCallback(handleClick, 500);

  return <ActionButton onClick={debouncedHandleClick} title="Create Randomly" color="primary" />;
};
