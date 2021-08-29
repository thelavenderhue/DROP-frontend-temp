import React from 'react'
import styled from 'styled-components'
import StarIcon from '@material-ui/icons/Star';

const Box = styled.div`
  background-color: white;
  height: 245px;
  padding: 20px;
  border-radius: 12px;
`;

const Ele = styled.div`
 display: flex;
 color: ${props => props.icolor};
 font-size: ${props =>props.isize || 18}px;
 font-weight: 600;
 justify-content: ${props =>props.jc || "space-between"};
 margin-bottom: ${props =>props.mb || 15}px;
 text-align: center;
 align-items: center;
`;

const SStarIcon = styled(StarIcon)`
  color: #C4C4C4;
`;

function TandC() {
  return (
    <Box>
      <Ele jc="center" mb="30"> Terms & Conditions </Ele>
      <Ele jc="center" isize="13" mb="50"> What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been </Ele> 
      <Ele icolor="#109CF1" isize="13"> I agree <SStarIcon/> </Ele>     
    </Box>
  )
}

export default TandC
