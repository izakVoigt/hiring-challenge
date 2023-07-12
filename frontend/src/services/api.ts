import { ITicket } from '@interfaces';
import { TicketStatusEnum } from '@utils/enums/TicketStatus';
import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

interface ICreateTicket {
  client: string;
  deadline: Date;
  issue: string;
}

interface IUpdateTicketStatus {
  id: string;
  status: TicketStatusEnum;
}

export const createTicket: ({ client, deadline, issue }: ICreateTicket) => Promise<{ ticket: ITicket }> = async ({
  client,
  deadline,
  issue,
}) => {
  try {
    const { data } = await api.post<{ ticket: ITicket }>('/tickets', { client, deadline, issue });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data);
      return error.response.data.message;
    }
  }
};

export const getTicketsList: () => Promise<{ list: ITicket[] }> = async () => {
  try {
    const { data } = await api.get<{ list: ITicket[] }>('/tickets');

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data);
      return error.response.data.message;
    }
    if (axios.isAxiosError(error)) {
      console.log(error.request);
    }
  }
};

export const updateTicketStatus: ({ id, status }: IUpdateTicketStatus) => Promise<{ ticket: ITicket }> = async ({
  id,
  status,
}: IUpdateTicketStatus) => {
  try {
    const { data } = await api.put<{ ticket: ITicket }>(`/tickets/${id}`, { status });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data);
      return error.response.data.message;
    }
  }
};
