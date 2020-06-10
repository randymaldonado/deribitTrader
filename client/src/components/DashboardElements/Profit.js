import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyles = makeStyles({
  profitBTCContext: {
    flex: 1,
  },
});

const convertToStringProfitUSD = (usd) => {
  // Could use '$' + usd, but could lead to type errors
  return "$" + usd.toString()
}

const convertToStringProfitBTC = (btc) => {
  return btc.toString() + ' BTC'
}

export default function Profit(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Session Profit/Loss</Title>
      <Typography component="p" variant="h4">
        {convertToStringProfitUSD(props.data.profitUSD)}
      </Typography>
      <Typography color="textSecondary" className={classes.profitBTCContext}>
        {convertToStringProfitBTC(props.data.profitBTC)}
      </Typography>
    </React.Fragment>
  );
}
