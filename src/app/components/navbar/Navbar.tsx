import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

const Nav: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Hermanos sin ganas de trabajar.SRL
        </Typography>
        <Button color="inherit">
          <NextLink href="/" passHref>
            <MuiLink color="inherit">Home</MuiLink>
          </NextLink>
        </Button>
        <Button color="inherit">
          <NextLink href="/about" passHref>
            <MuiLink color="inherit">About</MuiLink>
          </NextLink>
        </Button>
        <Button color="inherit">
          <NextLink href="/about" passHref>
            <MuiLink color="inherit">Nosotros</MuiLink>
          </NextLink>
        </Button>
        <Button color="inherit">
          <NextLink href="/about" passHref>
            <MuiLink color="inherit">Contacto</MuiLink>
          </NextLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
