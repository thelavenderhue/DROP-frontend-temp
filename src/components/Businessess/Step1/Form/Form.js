import React from 'react'
import styled from 'styled-components'
import { useForm, Form } from './useForm'
import Input from './input';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

const Box = styled.div`
  background-color: white;
  height: 753px;
  margin-left: 20px;
  margin-bottom: 100px;
  padding: 40px;
  padding-top: 70px;
`;

const Ele = styled.div`
  width: ${props => props.iwidth || 85}%;
  margin-bottom: ${props => props.mr || 50}px;
  display: flex;
  justify-content: ${props =>props.jc || "space-between"};
`;

const SButton = styled(Button)`
  width: 25%;
  background-color: #c4c4c4;
  border-radius: 4px;
  height: 46px;
  color: white;
  text-transform: none;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
`;

const initialFValues = {
  id: 0,
  name: '',
  busninessId: '',
  addressline1: '',
  addressline2: '',
  pincode: '',
  phoneNo: '',
  addDoc: '',
  addPic: '',
}

function BusninessForm(props) {
  const {history} = props;

  const {
    values,
    setValues,
    handleInputChange,
    resetForm
  } = useForm(initialFValues);

  const handleSubmit = e => {
    e.preventDefault()
}
  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Ele><Input
            name="name"
            label="Business Name"
            value={values.name}
            onChange={handleInputChange}
        /></Ele>
        <Ele iwidth="40"><Input
            name="busninessId"
            label="Busniness ID"
            value={values.busninessId}
            onChange={handleInputChange}
        /></Ele>
        <Ele mr="0" iwidth="80">
        <Ele iwidth="30"><Input
            name="addressline1"
            label="Address Line"
            value={values.addressline1}
            onChange={handleInputChange}
        /></Ele>
        <Ele iwidth="30"><Input
            name="addressline2"
            label="Address Line"
            value={values.addressline2}
            onChange={handleInputChange}
        /></Ele>
        <Ele iwidth="30"><Input
            name="pincode"
            label="Pincode"
            value={values.pincode}
            onChange={handleInputChange}
        /></Ele></Ele>
        <Ele iwidth="30"><Input
            name="phoneNo"
            label="Phone No"
            value={values.phoneNo}
            onChange={handleInputChange}
        /></Ele>
        <Ele mr="70">
        <Input
            name="addDoc"
            label="Add Documents"
            value={values.addDoc}
            onChange={handleInputChange}
        /></Ele>
        <Ele><Input
            name="addPic"
            label="Add Photos"
            value={values.addPic}
            onChange={handleInputChange}
        /></Ele>
        <Ele jc="center" iwidth="100"><SButton onClick={() => history.push("/business/step2")}>
          Submit
        </SButton></Ele>
      </Form>
    </Box>
  )
}

export default withRouter(BusninessForm);
