import React from 'react';
import clsx from 'clsx';
import socketIOClient from "socket.io-client";
import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Profit from './DashboardElements/Profit'
import Leverage from './DashboardElements/Leverage'
import Trades from './DashboardElements/Trades'

const ENDPOINT = "http://127.0.0.1:5000";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240,
  },
}));

function Landing() {
  const initialState = {
    profit: {
      profitUSD: 0.00,
      profitBTC: 0.000,
    },
    leverage: 0.00,
    trades: {}
  };
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('UPDATE_STATE', function(data){
      setState(data)
    });
  }, []);

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Profit data={state.profit}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Leverage data={state.leverage}/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Trades data={state.trades} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Landing;
