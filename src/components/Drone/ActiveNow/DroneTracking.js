import React from 'react'
import styled from 'styled-components'
import { Divider } from '@material-ui/core';

const Box = styled.div`
    margin-left: 20px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    height: 846px;
`;

const Card = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  /* justify-content: center;
  align-items: center; */
  border-radius: ${props => props.ibr};
  height: ${props => props.iheight}px;
  background-color: ${props => props.ibg};
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
  margin:  ${props =>props.mr || "7"}px;;
`;

function DroneTracking() {
  return (
    <Box>
      <Card iheight="60" ibg="#EFEFEF" ibr="10px 10px 0px 0px">2 Drone available in the area</Card>
      <Card iheight="586" ibg="#D9D9D9"></Card>
      <Card>
        <Ele mr="0">
          <Ele>Drone ID : 1234456789 </Ele>
          <Ele>Operator : System</Ele>
        </Ele>
        <Divider/>
        <Ele>Distance from base : 5.6 km </Ele>
        <Ele mr="0">
          <Ele>Delivery Location : Chinchwad station </Ele>
          <Ele>Status : On time</Ele>
        </Ele>
        <Ele>Estimated Delivery time : Tues 5 by 6:05 pm</Ele>
      </Card>
    </Box>
  )
}

export default DroneTracking