import React from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Divider, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: `100%`,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2), 
    display: "flex",
    flexDirection: "column",
  },
}))(MuiAccordionDetails);

const Box = styled.div`
    margin-left: 20px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    height: 846px;
`;

const STextField = styled(TextField)`
  width: 96%;
  font-weight: 700;
  font-family: inherit;
  margin-left: 2%;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const Card = styled.div`
  padding: 20px;
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
  margin-bottom:  ${props =>props.mb || 30}px;
  margin-right: ${props =>props.mr}; 
`;

function OnDrone() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
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


    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Ele iwidth="100" mb="0"><Ele iwidth="100%" mb="0">Drone ID - 1234456789</Ele>
          <Ele mb="0" icolor="#109CF1">Status{expanded === 'panel1' ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</Ele></Ele>
      </AccordionSummary>
        <AccordionDetails>
          <Ele>Operator : Somnath D.</Ele>
          <Ele>Distance from base : 5 km</Ele>
          <Ele>Weather : Clear</Ele>
          <Ele>Package weight : 0.5 kg</Ele>
        </AccordionDetails>
    </Accordion>

      { !(expanded === 'panel1') && <Card>
        <Ele>Order No : 12226</Ele>
        <Ele>Business Owner : Vijay sales pimpri </Ele>
        <Ele>Delivery Location : Chinchwad</Ele>
        </Card>}
      <Divider/>


    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Ele iwidth="100" mb="0"><Ele iwidth="100%" mb="0">Drone ID - 1234456789</Ele>
        <Ele mb="0" icolor="#109CF1">Status{expanded === 'panel2' ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</Ele></Ele>
      </AccordionSummary>
      <AccordionDetails>
        <Ele>Operator : Somnath D.</Ele>
        <Ele>Distance from base : 5 km</Ele>
        <Ele>Weather : Clear</Ele>
        <Ele>Package weight : 0.5 kg</Ele>
      </AccordionDetails>
    </Accordion>
    { !(expanded === 'panel2') && <Card>
      <Ele>Order No : 12226</Ele>
      <Ele>Business Owner : Vijay sales pimpri </Ele>
      <Ele>Delivery Location : Chinchwad</Ele>
    </Card>}
    <Divider/>


    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Ele iwidth="100" mb="0"><Ele iwidth="100%" mb="0">Drone ID - 1234456789</Ele>
        <Ele mb="0" icolor="#109CF1">Status{expanded === 'panel3' ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</Ele></Ele>
      </AccordionSummary>
      <AccordionDetails>
        <Ele>Operator : Somnath D.</Ele>
        <Ele>Distance from base : 5 km</Ele>
        <Ele>Weather : Clear</Ele>
        <Ele>Package weight : 0.5 kg</Ele>
      </AccordionDetails>
    </Accordion>

    { !(expanded === 'panel3') && <Card>
      <Ele>Order No : 12226</Ele>
      <Ele>Business Owner : Vijay sales pimpri </Ele>
      <Ele>Delivery Location : Chinchwad</Ele>
    </Card>}
    <Divider/>
    </Box>
  )
}

export default OnDrone
