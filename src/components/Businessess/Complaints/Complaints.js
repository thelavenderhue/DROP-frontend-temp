import React from 'react'
import { Grid } from '@material-ui/core'
import ComplaintStatus from './ComplaintStatus'
import CustomerComplaints from './CustomerComplaints'

function Complaints() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}><ComplaintStatus/></Grid>
        <Grid item xs={12}><CustomerComplaints/></Grid>
      </Grid>
    </div>
  )
}

export default Complaints
