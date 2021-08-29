import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarIcon from '@material-ui/icons/Star';

const Box = styled.div`
  background-color: white;
  height: 294px;
  margin-top: 80px;
  margin-bottom: 40px;
  border-radius: 12px;
  padding: 20px;
`;

const Ele = styled.div`
 display: flex;
 font-size: 18px;
 font-weight: 600;
 justify-content: ${props =>props.jc || "space-between"};
 margin-bottom: ${props =>props.mb || 15}px;
`;

const SFiberManualRecordIcon = styled(FiberManualRecordIcon)`
  color: #C4C4C4;
`;

const SStarIcon = styled(StarIcon)`
  color: #C4C4C4;
`;

function DocNeeded() {
  return (
    <Box>
      <Ele mb="35"> Documents Needed </Ele>
      <Ele><SFiberManualRecordIcon/><SStarIcon/></Ele>
      <Ele><SFiberManualRecordIcon/><SStarIcon/></Ele>
      <Ele><SFiberManualRecordIcon/><SStarIcon/></Ele>
      <Ele><SFiberManualRecordIcon/></Ele>
      <Ele><SFiberManualRecordIcon/></Ele>
    </Box>
  )
}

export default DocNeeded
