import React from 'react';
import './Home.css'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CreateOrders from './CreateOrders';
import ViewOrderList from './ViewOrderList';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return(
    <Grid conatiner xs={12} className="background-image" >
      <h1 style={{textAlign: 'center'}}>Home Page</h1>
      <div className={classes.root} style={{textAlign: 'center'}}>
        <Button variant="contained" color="primary" href="/createorders">Create Orders</Button>
      </div>
    </Grid>
  )
}