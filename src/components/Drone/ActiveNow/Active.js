import React from 'react'
import styled from 'styled-components'
import OnDrone from './OnDrone';
import DroneTracking from './DroneTracking';

const AM2 = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
`;

function Active() {
  return (
    <AM2>
      <OnDrone/>
      <DroneTracking/>
    </AM2>
  )
}

export default Active
