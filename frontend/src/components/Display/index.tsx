import { Container } from '@mui/material';
import { ReactNode } from 'react';

export const Display = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Container
      role="contentinfo"
      sx={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#ebebeb',
        border: '2px solid #c8c8c8',
        borderRadius: '10px',
      }}
    >
      {children}
    </Container>
  );
};
