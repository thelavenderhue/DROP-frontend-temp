import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { ConfigureStore } from "./Redux/configureStore";
import { Provider } from "react-redux";
import { StylesProvider } from "@material-ui/core";
import SideBar from "./components/SideBar/SideBar";
import styled from "styled-components";
import Overview from "./components/Overview/Overview";
import Business from "./components/Businessess/Business";
import Drone from "./components/Drone/Drone";
import BusinessTabs from "./components/Businessess/BusinessTabs/BusinessTabs";

const store = ConfigureStore();

const AM1  = styled.div`
    display: flex;
    flex-direction: row;
`;

function App() {    
    return (
      <Provider store= {store}>
        <StylesProvider injectFirst>
            <BrowserRouter>
            <AM1>
                <SideBar/>
                <Switch>
                <Route exact from="/" render={props => <Overview {...props} />} />
                <Route exact path="/business" render={props => <Business {...props} />} />
                <Route exact path="/business/step2" render={props => <Business {...props} />} />
                <Route exact path="/business/step3" render={props => <Business {...props} />} />
                <Route exact path="/businessprofile" render={props => <BusinessTabs {...props} />} />
                <Route exact from="/drone" render={props => <Drone {...props} />} />
                <Overview/>
                </Switch>
            </AM1>
            </BrowserRouter>
        </StylesProvider>

    </Provider>
    );
}

export default App;
