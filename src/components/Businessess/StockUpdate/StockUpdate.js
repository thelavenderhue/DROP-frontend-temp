import React from 'react'
import StockTable from './StockTable'
import StockStatus from './StockStatus'
import StockAverage from './StockAverage'
import { Grid } from '@material-ui/core'
function StockUpdate() {
  return (
    <div>
      <Grid container spacing={3}>
      <Grid item xs={1}/>
        <Grid item xs={10} align="center"><StockTable/></Grid>
        <Grid item xs={4} align="center"><StockStatus/></Grid>
        <Grid item xs={8} align="center"    ><StockAverage/></Grid>
      </Grid>
    </div>
  )
}

export default StockUpdate
