import { ActionButton, Form, StyledTextField } from '@components';
import { useTicket } from '@hooks';
import { createTicket } from '@services';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';

export const CreateTicketForm = ({ handleClose }: { handleClose: () => void }) => {
  const [client, setClient] = useState<string>('');
  const [deadline, setDeadline] = useState<string>(String(new Date()));
  const [issue, setIssue] = useState<string>('');

  const ticket = useTicket();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const data = await createTicket({ client, deadline: new Date(deadline), issue });

      ticket.AddItem(data.ticket);

      toast.success('Ticket created successfully');

      handleClose();
    } catch (error) {
      toast.error('API call error');
      handleClose();
    }
  };

  const debouncedHandleSubmit = useDebouncedCallback(handleSubmit, 500);

  return (
    <Form onSubmit={debouncedHandleSubmit}>
      <StyledTextField
        type="text"
        label="Client"
        variant="filled"
        required
        value={client}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClient(e.target.value)}
      />
      <StyledTextField
        type="date"
        label="Deadline"
        variant="filled"
        required
        value={deadline}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDeadline(e.target.value)}
      />
      <StyledTextField
        type="text"
        label="Issue"
        variant="filled"
        required
        value={issue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIssue(e.target.value)}
      />
      <div>
        <ActionButton onClick={handleClose} title="Cancel" color="error" />
        <ActionButton onClick={handleSubmit} title="Create" color="primary" />
      </div>
    </Form>
  );
};
