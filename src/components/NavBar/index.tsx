import React, { FC } from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SX_TYPOGRAFY = {
  flexGrow: 1,
  textAlign: 'center',
  textTransform: 'uppercase',
  display: { xs: 'none', sm: 'block' },
};

const NavBar: FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' sx={SX_TYPOGRAFY}>
          task with users
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
