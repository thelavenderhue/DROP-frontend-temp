import React from 'react'
import styled from 'styled-components'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BusinessCard from '../BusinessCard/BusinessCard';
import ViewBusiness from '../BusinessCard/ViewBusiness';
import { Avatar } from '@material-ui/core';
import StockUpdate from '../StockUpdate/StockUpdate';
import DailyOrders from '../DailyOrders/DailyOrders';
import Complaints from '../Complaints/Complaints';

const Box = styled.div`
    margin-top: 90px;
    margin-left: 40px;
    width: 100%;
`;
const STab = styled(Tab)`
  text-transform: none;
  font-size: 18px;
  font-family: inherit;
  font-weight: 800;
  margin-bottom: -2px;
  border-bottom: 2px solid grey;
  
`;

const SAvatar = styled(Avatar)`
  color: black;
  background-color: white;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
  float: right;
`;

function BusinessTabs() {
    const [value, setValue] = React.useState(0);

    const handleTabs = (e,val) => {
      setValue(val)
    }
  
    return (
      <Box>
        <SAvatar>+</SAvatar>
        <Tabs 
        value={value} 
        onChange={handleTabs}
        variant="fullWidth"
        TabIndicatorProps={{
          style: { background: "#109CF1", height: "10px", top: "45px" }
        }}>
          <STab label="Business Profile" />
          <STab label="Recharge" />
          <STab label="Stock Update" />
          <STab label="Daily Orders" />
          <STab label="Complaints" />
        </Tabs>

        <TabPanel value={value} index={0}><BusinessCard/></TabPanel>
        <TabPanel value={value} index={1}>x</TabPanel>
        <TabPanel value={value} index={2}><StockUpdate/></TabPanel>
        <TabPanel value={value} index={3}><DailyOrders/></TabPanel>
        <TabPanel value={value} index={4}><Complaints/></TabPanel>
      </Box>
    )
}

export default BusinessTabs

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
