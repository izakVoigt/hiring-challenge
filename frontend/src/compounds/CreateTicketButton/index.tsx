import { ActionButton } from '@components';
import { useState } from 'react';
import { ModalCreateTicket } from '..';

export const CreateTicketButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ActionButton title="Create New" onClick={handleOpen} color="primary" />
      <ModalCreateTicket open={open} handleClose={handleClose} />
    </>
  );
};
