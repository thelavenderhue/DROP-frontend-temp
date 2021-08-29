import React from 'react'
import styled from 'styled-components'
import { Grid, Card, Divider, Typography} from '@material-ui/core'
import {Proflist} from './ProfList'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green, red } from '@material-ui/core/colors';

const SCard = styled(Card)`
  padding: 10px;
`;

const T = styled(Typography)`
  font-family: inherit;
  font-weight: 700;
`;
function DroneProfile() {
  return (
    <div>
      <div>Away For Delivery</div>
      <Grid container spacing={3}>
        {Proflist.map((item) =>{
          const{id, droneId, status, lservice, issues, next, speed, battery, distance, weight} =item;
          return(
            <Grid item xs={6} key={id}>
              <SCard spacing={3}>
                <Grid container spacing={3}>
                  <Grid item xs={9}><T variant="h6">Drone ID: {droneId}</T></Grid>
                  <Grid item xs={3}><Grid container direction="row" alignItems="center"><T><FiberManualRecordIcon fontSize="small" style={status === "Active" ? {color : green[300]} : {color: red[300]}}/></T><T>{status}</T></Grid></Grid>
                  <Grid item xs={12}><T><Divider/></T></Grid>
                  <Grid item xs={12}><T variant="h6">Maintenance Record</T></Grid>
                  <Grid item xs={4}><T align="center" variant="h6">Last Service</T><T align="center">{lservice}</T></Grid>
                  <Grid item xs={4}><T align="center" >Issues Detected</T><T align="center">{issues}</T></Grid>
                  <Grid item xs={4}><T align="center" variant="h6">Next Service</T><T align="center">{next}</T></Grid>
                  <Grid item xs={3}><T align="center">{speed}</T></Grid>
                  <Grid item xs={3}><T align="center">{battery}</T></Grid>
                  <Grid item xs={3}><T align="center">{distance}</T></Grid>
                  <Grid item xs={3}><T align="center">{weight}</T></Grid>
                </Grid>
              </SCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
}

export default DroneProfile
