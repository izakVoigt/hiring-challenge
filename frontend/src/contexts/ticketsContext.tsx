import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { ITicket } from '@interfaces';
import { getTicketsList } from '@services';
import { sortTicketsByDeadlineDesc } from '@utils/index';
import { toast } from 'react-toastify';

interface ITicketContext {
  TicketData: ITicket[];
  AddItem: (ticket: ITicket) => void;
}

export const TicketContext = createContext<ITicketContext>({
  TicketData: [],
  AddItem: () => {},
});

export const TicketContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ITicket[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTicketsList();

        setData(data.list);
      } catch (error) {
        toast.error('API call error');
      }
    };

    getData();
  }, []);

  const addItem = useCallback((ticket: ITicket) => {
    setData((prevState) => {
      const newData = [...prevState, ticket];

      const sortedData = sortTicketsByDeadlineDesc(newData);

      return sortedData;
    });
  }, []);

  return <TicketContext.Provider value={{ TicketData: data, AddItem: addItem }}>{children}</TicketContext.Provider>;
};
