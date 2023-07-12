import { Container } from '@mui/material';
import { ReactNode } from 'react';

export const DisplayContent = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Container
      role="contentinfo"
      sx={{
        marginBottom: '100px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {children}
    </Container>
  );
};
