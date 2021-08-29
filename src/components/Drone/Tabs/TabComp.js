import React from 'react'
import styled from 'styled-components'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Active from '../ActiveNow/Active';
import Scheduled from '../Scheduled/Scheduled';
import DroneProfile from '../DroneProfile/DroneProfile';


const Box = styled.div`
    margin-top: 70px;
    margin-left: 40px;
    width:100%;
`;
const STab = styled(Tab)`
  text-transform: none;
  font-size: 18px;
  font-family: inherit;
  font-weight: 800;
  margin-bottom: -2px;
`;

const STabs = styled(Tabs)`
    border-bottom: 2px solid grey;
`;

function TabComp() {
    const [value, setValue] = React.useState(0);

    const handleTabs = (e,val) => {
      setValue(val)
    }
  
    return (
      <Box>
        <STabs 
        value={value} 
        onChange={handleTabs}
        variant="fullWidth"
        TabIndicatorProps={{
          style: { background: "#109CF1", height: "10px", top: "45px" }
        }}>
          <STab label="Active Now" />
          <STab label="Scheduled" />
          <STab label="Drone Profile" />
        </STabs>

        <TabPanel value={value} index={0}><Active/></TabPanel>
        <TabPanel value={value} index={1}><Scheduled/></TabPanel>
        <TabPanel value={value} index={2}><DroneProfile/></TabPanel>
      </Box>
    )
}

function TabPanel(props) {
  const { children, value, index} = props;
  return (
    <div>
      {value === index && (
        <h1>{children}</h1>
      )}
    </div>
  );
}

export default TabComp
