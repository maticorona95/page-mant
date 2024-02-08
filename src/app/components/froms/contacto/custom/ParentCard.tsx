import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Divider, Box } from '@mui/material';


type Props = {
  title: string;
  footer?: string | JSX.Element;
  children: JSX.Element;
};

const ParentCard = ({ title, children, footer }: Props) => {
  const customizer ='customizer';

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
    
     
    >
      <CardHeader title={title} />
      <Divider />

      <CardContent>{children}</CardContent>
      {footer ? (
        <>
          <Divider />
          <Box p={3}>{footer}</Box>
        </>
      ) : (
        ''
      )}
    </Card>
  );
};

export default ParentCard;
