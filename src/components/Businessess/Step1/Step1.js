import React from 'react'
import styled from 'styled-components';
import BusninessForm from './Form/Form';
import TandC from './T&C';
import DocNeeded from './DocNeeded';
import { withRouter } from 'react-router';

const AM1  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const AM2 = styled.div`
  display:flex;
  flex-direction: column;
  width: ${props => props.iwidth}%;
`;

function Step1() {
  return (
    <AM1>
      <BusninessForm/>
      <AM2 iwidth="27">
          <DocNeeded/>
          <TandC/>
      </AM2>
    </AM1>
  )
}

export default withRouter(Step1);
