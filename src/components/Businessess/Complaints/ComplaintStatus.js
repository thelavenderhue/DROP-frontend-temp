import React from 'react'
import { Grid, Typography, CircularProgress, Paper } from '@material-ui/core'
function ComplaintStatus() {
  return (
    <div>
      <Grid component={Paper} container spacing={3}>
        <Grid item xs={12}><Typography>No of Complaints</Typography></Grid>
        <Grid item xs={8} align="center"><CircularProgress size={250} thickness={3} variant="determinate" value={80} style={{color: "#2ED47A"}} /></Grid>
        <Grid item xs={4}>
            <Typography>Solved Complaints</Typography>
            <Typography>40</Typography>
            <br/>
            <Typography>UnSolved Complaints</Typography>
            <Typography>10</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ComplaintStatus
