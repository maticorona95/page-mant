import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// Verificar si el entorno es del cliente antes de usar styled
let CustomFormLabel: any = null;

if (typeof window !== 'undefined') {
  CustomFormLabel = styled((props: any) => (
    <Typography
      variant="subtitle1"
      fontWeight={600}
      {...props}
      component="label"
      htmlFor={props.htmlFor}
    />
  ))(() => ({
    marginBottom: '5px',
    marginTop: '25px',
    display: 'block',
  }));
}

export default CustomFormLabel;
