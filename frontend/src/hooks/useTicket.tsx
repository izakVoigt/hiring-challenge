import { TicketContext } from '@contexts';
import { useContext } from 'react';

export const useTicket = () => {
  const context = useContext(TicketContext);

  return context;
};
