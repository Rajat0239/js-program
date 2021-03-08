import React, {useState} from 'react';
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Sandwich, Price) {
  return { Sandwich, Price};
}

const rows = [
  createData('Vegetarian', 150),
  createData('BLT', 200),
  createData('Turkey', 220),
  createData('Chocolate', 250),
];

export default function CreateOrders() {
  let history = useHistory();
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [calPrice, setCalPrice] = useState([]);

  let totalPrice = 0
  const handleAdd = (data, price) => { 
    // let price1 = ''
    // price1 = price
    let store = list
    store.push(data)
    console.log('store', store)
    setList(store)
    let price1 = calPrice
    price1.push(price)
    console.log('price1', price)
    // totalPrice += parseInt(price1)
    // console.log('totalPrice', totalPrice)
  }
console.log('list', list)
console.log('totalPrice', totalPrice)
  
  return (
    <TableContainer component={Paper} className="background-image">
      <Table className={classes.table}
       style={{width: '60%',  margin:'auto', backgroundColor: 'antiquewhite', textAlign: '-webkit-center'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell ><b>Sandwich</b></TableCell>
            <TableCell ><b>Price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell >{row.Sandwich}</TableCell>
              <TableCell >{row.Price}
                <IconButton aria-label="add" style={{float: 'right', marginRight: '30px'}} onClick={() => handleAdd(row.Sandwich, row.Price)}>
                <AddIcon />
                </IconButton>
                </TableCell>
            </TableRow>
          ))}
          <Button variant="contained" color="primary" onClick={()=> history.push({
            pathname: '/orderlist',
            state: {list: list,
            price: calPrice}
          })}
           style={{padding: '11px 17px', margin: '15px 0px'}}>Order List</Button>
        </TableBody>
      </Table>
    </TableContainer>
  );
}