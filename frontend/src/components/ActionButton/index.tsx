import { Button } from '@mui/material';
import { IButton } from './types';

export const ActionButton = ({ color, onClick, title }: IButton) => {
  return (
    <Button role="button" color={color} variant="contained" onClick={onClick} sx={{ margin: '0 10px' }}>
      {`${title}`}
    </Button>
  );
};
