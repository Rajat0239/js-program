import React, { useEffect } from 'react';
import './Home.css'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function OrderList(props) {
  let orderData = []
  
  
  console.log('props', props.location.state)
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [finalList, setFinalList] = React.useState(props?.location?.state?.list);
  const [allPrice, setAllPrice] = React.useState(props?.location?.state?.price);
  const [openGrid, setOpenGrid] = React.useState(false)
  const [total, setTotalPrice] = React.useState(0)
  // let allPrice = []
  // allPrice = props?.location?.state?.price
console.log('allPrice',allPrice)
console.log('all finalListtttt', finalList)

  const handleDelete = (list, index) => {
    console.log('finalListtttt', finalList)
    // let index = finalList.indexOf(list)
    finalList.indexOf(list)
    allPrice.indexOf(list)
    finalList.splice(index,1)
    allPrice.splice(index,1)
    // console.log('list', list)
    // console.log('finalList', allPrice)
    setFinalList([...finalList]);
    setAllPrice([...allPrice]);
    console.log(finalList, allPrice)
  }
  let totalPrice =  0
  const handleOpenGrid =(price) => {
    totalPrice = price.reduce(function(a, b){
      return a + b;
  }, 0);
    setOpenGrid(true)
    setTotalPrice(totalPrice)
    }
  return(
    <div className={classes.root} className="background-image" >
          <div  className={classes.demo} style={{width: '50%', textAlign: '-webkit-center' , margin: '0 auto'}}>
          <Typography variant="h3" className="text-center">
        Final Order List
        </Typography>
            <Grid container spacing={3}>
            <Grid item xs={6}>
                  <Typography variant="h5" style={{textAlign: '-webkit-center'}}>
                  Prices
                </Typography>
                {allPrice && allPrice.map((b) =>{
                      return(
                      <ListItem style={{textAlign: 'center'}}>
                      <ListItemText
                        primary={b}
                      />
                    </ListItem>)
                    })
                      } 
                {/* {<>
                  <h4>Total Price is: {props?.location?.state?.total}</h4>
                </>} */}
                  </Grid>
                  <Grid item xs={6}>
                  <Typography variant="h5" style={{textAlign: '-webkit-center'}}>
                  Sandwiches
                </Typography>
                {finalList && finalList.map((a,index) => {
                  <List dense={dense} key={index}>
                  </List>
                  return(
                    <>
                    <ListItem style={{textAlign: 'center'}}>
                      <ListItemText
                        primary={a}
                      />
                      <IconButton edge="end" aria-label="delete" style={{padding:0,float: 'right', marginRight: '30px'}}
                        onClick={() => handleDelete(a, index)}>
                            <DeleteIcon />
                          </IconButton>
                    </ListItem>
                    </>
                  )
                })}
                  </Grid>
                  
                  <div style={{width:'40%', margin:'auto',marginBottom:30}}>
                    <Button variant="contained" color="primary" onClick={() =>handleOpenGrid(props.location.state.price)}
                      style={{padding: '11px 17px'}}>Total Bill</Button>
                  </div>
        </Grid>     
    </div>   
    
      {openGrid === true && 
        <Grid className={classes.demo} 
        style={{width: '50%', textAlign: '-webkit-center' , margin: '0 auto', margin: '80px auto', padding: '87px 4px'}}>
          <Typography>
            Your total bill is: {total}
          </Typography>

        </Grid>
      }
</div>
  )
}