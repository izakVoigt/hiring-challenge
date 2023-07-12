import { Dialog } from '@mui/material';
import { CreateTicketForm } from '..';

export const ModalCreateTicket = ({ open, handleClose }: { open: boolean; handleClose: () => void }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <CreateTicketForm handleClose={handleClose} />
    </Dialog>
  );
};
