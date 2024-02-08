import * as React from 'react';
import { Grid } from '@mui/material';
import ActionAreaCard from './ActionAreaCard'; // Asegúrate de importar tu componente de tarjeta

export default function GridOfCards() {
  return (
<Grid container spacing={2} justifyContent="center" ml={4}>

      {/* Primera fila */}
      <Grid item xs={12} md={4}>
        <ActionAreaCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <ActionAreaCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <ActionAreaCard />
      </Grid>
      {/* Segunda fila */}
      <Grid item xs={12} md={4}>
        <ActionAreaCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <ActionAreaCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <ActionAreaCard />
      </Grid>
    </Grid>
  );
}
