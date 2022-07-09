import { Box, Container } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import NavBar from '../NavBar';

interface AppLayoutProps {
  children: ReactElement;
}

const SX_CONTAINER = { pt: 3 };

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Container sx={SX_CONTAINER}>{children}</Container>
    </Box>
  );
};

export default AppLayout;
