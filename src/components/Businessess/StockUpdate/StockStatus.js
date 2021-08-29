import React from 'react'
import styled from 'styled-components'
import { Grid, Paper, CircularProgress, Typography } from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

function StockStatus() {
  return (
    <div>
      <Grid component={Paper} container spacing={3}>
        <Grid item xs={3}><Typography>Status</Typography></Grid>
        <Grid item xs={9} align="right"><Typography>Show: Today 18-2-2020</Typography></Grid>
        <Grid item xs={12} align="center"><CircularProgress size={250} thickness={3} variant="determinate" value={100} style={{color: "#2ED47A"}} /></Grid>
        <Grid item xs={4} align="center"><Typography style={{fontSize: "10px"}}><RadioButtonUncheckedIcon style={{fontSize: "10px", color:"#FFB946"}}/>To be Returned</Typography></Grid>
        <Grid item xs={4} align="center"><Typography style={{fontSize: "10px"}}><RadioButtonUncheckedIcon style={{fontSize: "10px", color:"#F7685B"}}/>Faulty</Typography></Grid>
        <Grid item xs={4} align="center"><Typography style={{fontSize: "10px"}}><RadioButtonUncheckedIcon style={{fontSize: "10px", color:"#2ED47A"}}/>Shipped Orders</Typography></Grid>
      </Grid>
    </div>
  )
}

export default StockStatus
