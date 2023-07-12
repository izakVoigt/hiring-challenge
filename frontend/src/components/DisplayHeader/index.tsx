import { Container } from '@mui/material';
import { ReactNode } from 'react';

export const DisplayHeader = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Container role="contentinfo" sx={{ margin: '20px 0' }}>
      {children}
    </Container>
  );
};
