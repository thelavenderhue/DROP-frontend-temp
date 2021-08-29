import React from 'react'
import styled from 'styled-components';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import {Ilist} from './List'
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const STimelineDot = styled(TimelineDot)`
  margin: 0px;
  background-color: ${props => props.icolor};
`;

const Box = styled.div`
    width:  ${props => props.iwidth}px;
    margin-left: ${props =>props.ml}px; 
    padding: 10px;
    margin-bottom: -30px;
`;
const STimelineContent = styled(TimelineContent)`
    display: flex;
    align-items: center;
    margin-top: -25px;
`;

const Img = styled.img`
  margin-right: 10px;
`;

const Ele = styled.div`
  width: ${props => props.iwidth}px;
  font-size: ${props =>props.isize || "14"}px;
  font-weight: ${props =>props.iweight || "700"};
  color: ${props =>props.icolor || "#323C47"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  margin-right: ${props =>props.mr}; 
`;

const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  background-color: #109CF1;
  padding: 5.5px;
  border-radius: 100px;
  color: white;
  margin-right: 5px;
`;
const STimelineConnector = styled(TimelineConnector)`
    background-color: black;
`;

function TL() {
  return (
      <>
    <Box ml="20">
        <Ele isize="16">Live Order<Ele icolor = "rgba(7, 166, 243, 1)"  mr = "11px"> See all </Ele></Ele>
        <Ele>Order Id - 10034</Ele>
        <Ele>
        Name - P K Traders
        <Ele idisplay="flex"><StyledAccessTimeIcon/>20 min </Ele>
        </Ele>
    </Box>
    <Box iwidth="630" ml="-170">
      <Timeline>
      {Ilist.map((item) => {
        const{id, status, time, color, image} = item;
        return(
          <TimelineItem key={id}>
          <TimelineSeparator>
            <STimelineDot icolor={color}>
            <CheckIcon />
            </STimelineDot>
          { !(id === 3) && <STimelineConnector />}
          </TimelineSeparator>
          <STimelineContent>
          <Img src={image} />
              <Typography>
                {status}
              </Typography>
          </STimelineContent>
          <TimelineContent>
            <Typography>
                {time}
            </Typography>
          </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
    </Box>
    </>
  )
}

export default TL
