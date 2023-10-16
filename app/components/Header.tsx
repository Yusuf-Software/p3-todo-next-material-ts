import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" color={'#FFF'}>Todo List</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
