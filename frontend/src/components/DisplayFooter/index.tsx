import { Container } from '@mui/material';
import { ReactNode } from 'react';

export const DisplayFooter = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Container
      role="contentinfo"
      sx={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      {children}
    </Container>
  );
};
