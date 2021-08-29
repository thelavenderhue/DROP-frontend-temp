import React from 'react'
import { Grid, Card, Typography, Avatar, Button} from '@material-ui/core'
import styled from 'styled-components'
import { Userlist } from './userlist';
import ViewBusiness from './ViewBusiness';

const T = styled(Typography)`
    font-family: inherit;
    background-color: ${props => props.bg};
    border-radius: 4px;
    color: ${props => props.icolor};
    padding: 5px;
    font-weight: ${props => props.iweight};
    font-size: ${props => props.isize};  
    display: flex;
    align-items: center;
`;

const SCard = styled(Card)`
    margin-bottom: 20px;
    padding: 10px;
`;
const SAvatar = styled(Avatar)`
    height: 25px;
    width: 25px;
    margin-right: 4px;
`;
function BusinessCard(props) {
  const {history} = props;

  return (
    <div>
      <Grid container spacing={3}>
          <Grid item xs={8}>
              {Userlist.map((item) => {
                  const{id, owner, mobile, email} = item;
                  return(
                    <SCard key={id}>
                        <Grid container spacing={0.5}>
                            <Grid item xs={12}><T variant="h6"icolor="#323C47" iweight="700">Name Of business</T></Grid>
                            <Grid item xs={2}><T icolor="rgba(0,0,0,0.5)"iweight="bolder">Reg date</T></Grid>
                            <Grid item xs={10}><T icolor="#2ED47A">Stock updated</T></Grid>
                            <Grid item xs={4}><T><SAvatar>P</SAvatar>Owner - {owner}</T></Grid>
                            <Grid item xs={3}><T align="center">{mobile}</T></Grid>
                            <Grid item xs={3}><T align="center">{email}</T></Grid>
                            <Grid item xs={2}><T align="center" bg="#2ED47A" icolor="white">View business</T></Grid>
                        </Grid>
                    </SCard>
                );
              })}  
          </Grid>
          <Grid item xs={3}>
              <Card>
                <Grid container spacing={1}>
                <Grid item xs={12}><T iweight="600" align="center">Overall sales</T></Grid>
                <Grid item xs={12}><T variant="h4" iweight="1000" align="center">86%</T></Grid>
                <Grid item xs={12}><T align="center">Lesser as compared to yesterday</T></Grid>
                </Grid>
              </Card>
          </Grid>
      </Grid>
    </div>
  )
}

export default BusinessCard
