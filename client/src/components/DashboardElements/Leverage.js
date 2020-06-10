import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

export default function Leverage(props) {
  return (
    <React.Fragment>
      <Title>Session Leverage</Title>
      <Typography component="p" variant="h4">
        {props.data}
      </Typography>
    </React.Fragment>
  );
}
