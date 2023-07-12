import { StatusDisplay, ToggleCheckbox } from '@components';
import { updateTicketStatus } from '@services';
import { TicketStatusEnum } from '@utils/enums/TicketStatus';
import { useEffect, useState } from 'react';
import { ITicketStatus } from './types';

export const TicketStatus = ({ deadline, id, status }: ITicketStatus) => {
  const [ticketStatus, setTicketStatus] = useState<TicketStatusEnum>(status);
  const today = new Date();
  let color = '';

  if (ticketStatus === TicketStatusEnum.CLOSED) {
    color = 'green';
  } else if (ticketStatus === TicketStatusEnum.OPEN) {
    color = deadline < today ? 'red' : 'yellow';
  }

  const handleCheckboxChange = async () => {
    if (ticketStatus === TicketStatusEnum.OPEN) {
      setTicketStatus(TicketStatusEnum.CLOSED);
    } else {
      setTicketStatus(TicketStatusEnum.OPEN);
    }
  };

  useEffect(() => {
    const updateStatus = async () => {
      await updateTicketStatus({ id, status: ticketStatus });
    };

    updateStatus();
  }, [id, ticketStatus]);

  return (
    <>
      <ToggleCheckbox
        checked={ticketStatus === TicketStatusEnum.CLOSED ? true : false}
        onChange={handleCheckboxChange}
      />
      <StatusDisplay color={color} />
    </>
  );
};
