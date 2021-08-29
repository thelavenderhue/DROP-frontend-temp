import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {Datalist} from './DataList'
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@material-ui/core'

const STextField = styled(TextField)`
  width: 40%;
  font-weight: 700;
  font-family: inherit;
  margin-left: 2%;
  margin-bottom: 30px;
  margin-top: 10px;
`;
const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
`;
const Ele = styled.div`
  width: ${props => props.iwidth}%;
  font-size: ${props =>props.isize || "18"}px;
  font-weight: ${props =>props.iweight || "700"};
  color: ${props =>props.icolor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom:  ${props =>props.mb || 10}px;
  margin-top:  ${props =>props.mt}px;
  margin-right: ${props =>props.mr}; 
`;

function Scheduled() {
  return (
    <div>
      <STextField
        id="input-with-icon-textfield"
        placeholder="  Search ID"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon  style={{color: grey[500]}}/>
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={3}>
        {Datalist.map((item) => {
          const {id, date, droneId, battery, orderId, customerId, rTime, location, weight} = item;
          return(
          <Grid item xs={6} key={id}>
            <Card>
              <Ele mb="0">
              <Ele mb="0">{date}</Ele>
              <Ele mb="0" iweight="1100">Drone ID - {droneId}</Ele>
              <Ele mb="0">{battery}</Ele>
              </Ele>
              <Divider/>
              <Ele mt="30">Order ID - {orderId}</Ele>
              <Ele>Customer ID - {customerId}</Ele>
              <Ele>Estimated return time: {rTime}</Ele>
              <Ele>Location of Delivery: {location}</Ele>
              <Ele>Package weight: {weight}</Ele>
            </Card>
          </Grid>
          );
         })}
      </Grid>
    </div>
  )
}

export default Scheduled
