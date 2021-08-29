import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography, IconButton } from '@material-ui/core';

const SIconButton = styled(IconButton)`
  font-family: inherit;
  color: black;
`;

const T = styled(Typography)`
    display: flex;
    align-items: center;
    text-align: center;
    height: 200px;
    padding: 10px;
    width: 200px;
    font-size: 18px;
    border-radius: 50%;
    font-family: inherit !important;
    border: 2px solid #109CF1;
    background-color: ${props => props.ibg || "rgba(16, 156, 241, 0.41)"};
    margin: 20px;
`;

function Step2() {
  const history = useHistory();
  return (
    <>
    <br/><br/><br/><br/>
    <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={3}><T>Submit your details</T></Grid>
      <Grid item xs={3}><T>Agree to the terms and contidions</T></Grid>
      <Grid item xs={3}><T>Agreement is sent for the partnership</T></Grid>
      <Grid item xs={3}><SIconButton onClick={() => history.push('/business/step3')}><T ibg="none">Give further details</T></SIconButton></Grid>
    </Grid>
    </>
  )
}

export default withRouter(Step2);
