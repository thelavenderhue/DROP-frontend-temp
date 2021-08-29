import React from 'react'
import TabComp from './Tabs/TabComp'
import styled from 'styled-components'

const Box = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    width: 78%;
`;

function Drone() {
  return (
    <Box>
      <TabComp/>
    </Box>
  )
}

export default Drone
