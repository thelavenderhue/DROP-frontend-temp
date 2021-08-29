import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import AddBusiness from './AddBusiness'
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import BusinessTabs from './BusinessTabs/BusinessTabs';

function Business() {
  return (
    <div>
      <AddBusiness/>
      <Switch>
        <Route exact path="/business" render={props => <Step1 {...props} />} />
        <Route exact path="/business/step2" render={props => <Step2 {...props} />} />
        <Route exact path="/business/step3" render={props => <Step3 {...props} />} />
        <Route exact path="/businessprofile" render={props => <BusinessTabs {...props} />} />
      </Switch>
    </div>
  )
}

export default withRouter(Business);
