import React from 'react'
import { Grid, Typography, Card, Avatar} from '@material-ui/core'
import styled from 'styled-components';


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
    background-color: white;
`;

const SAvatar = styled(Avatar)`
    height: 25px;
    width: 25px;
    margin-right: 4px;
`;

const Box = styled.div`
  background-color: #C4C4C4;
  height: ${props => props.iheight};
  width: ${props => props.iwidth};
  display: inline-block;
`;

function ViewBusiness() {
  return (
    <div>
      <Grid container spacing={2}>

        <Grid item xs={9}>
          <SCard>
            <Grid container>
              <Grid item xs={2}><Box iheight="100px" iwidth="100px"/></Grid>
              <Grid item xs={10}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}><T variant="h6"icolor="#323C47" iweight="700">Name Of business</T></Grid>
                    <Grid item xs={12}><T icolor="rgba(0,0,0,0.5)"iweight="bolder">Business ID</T></Grid>
                    <Grid item xs={3}><T  isize="12px"><SAvatar>P</SAvatar>Owner - Priya Rao</T></Grid>
                    <Grid item xs={3}><T isize="12px" align="center">+91 5467273523</T></Grid>
                    <Grid item xs={3}><T  isize="12px" align="center">113@gmail.com</T></Grid>
                    <Grid item xs={3}><T align="right" bg="#2ED47A" icolor="white" isize="12px">View business</T></Grid>
                  </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}><T iweight="700">Description-</T></Grid>
                <Grid item xs={12}><T>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has</T></Grid>
                <Grid item xs={12}><T>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has</T></Grid>
                <Grid item xs={12}><T>Type of business -</T> </Grid>
                <Grid item xs={12}><T>Current sale -</T></Grid>
                <Grid item xs={12}><T>Address of Head office -</T></Grid>
                <Grid item xs={12}><T>Website address - </T></Grid>
                <Grid item xs={12}><T>Company Status -</T></Grid>
                <Grid item xs={12}><T>Date of creation -</T></Grid>
                <Grid item xs={12}><T>Main areas of activity of busines -</T></Grid>
                <Grid item xs={12}><T>Main product - </T></Grid>
              </Grid>
            </Grid>
          </SCard>
        </Grid>

        <Grid item xs={3}>
          <T>Images</T>
          <Box iheight="170px" iwidth="230px"/>
          <Box iheight="170px" iwidth="230px"/>
          <Box iheight="170px" iwidth="230px"/>
          <Box iheight="170px" iwidth="230px"/>
          <Box iheight="170px" iwidth="230px"/>
        </Grid>

      </Grid>
    </div>
  )
}

export default ViewBusiness
