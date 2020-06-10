import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, datetime, instrument, side, amount, price, transactionFee) {
  return { id, datetime, instrument, side, amount, price, transactionFee };
}
// need to create rows from fetching data from API call
const rows = [
  createData(74956848, '2019-08-04 08:00:00 GMT', 'BTC-PERPETUAL', 'Close Sell', 6400, 10881, 0.001415),
  createData(74956847, '2019-08-04 07:00:00 GMT', 'BTC-PERPETUAL', 'Open Buy', 3200, 10651, 0.001415),
  createData(74956846, '2019-08-04 06:00:00 GMT', 'BTC-PERPETUAL', 'Open Buy', 3200, 10688, 0.001415),
  createData(74956845, '2019-08-04 05:00:00 GMT', 'BTC-PERPETUAL', 'Close Sell', 3200, 10651, 0.001415),
  createData(74956844, '2019-08-04 04:00:00 GMT', 'BTC-PERPETUAL', 'Open Buy', 3200, 10601, 0.001415)
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Trades(props) {
  const classes = useStyles();
  // const rows = props.data // change to Trades(props)
  return (
    <React.Fragment>
      <Title>Recent Trades</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Datetime</TableCell>
            <TableCell>Instrument</TableCell>
            <TableCell>Side</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="right">Transaction Fee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.datetime}</TableCell>
              <TableCell>{row.instrument}</TableCell>
              <TableCell>{row.side}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="right">{row.transactionFee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more trades
        </Link>
      </div>
    </React.Fragment>
  );
}
