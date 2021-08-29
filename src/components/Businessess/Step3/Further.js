import React from 'react';
import { Button, Grid, TextareaAutosize, TextField } from '@material-ui/core';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { withRouter } from 'react-router';

const STextareaAutosize = styled(TextareaAutosize)`
    width: 90%;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;
const SGrid = styled(Grid)`
    margin-left: 20px;
`;
const SButton = styled(Button)`
    background-color: #109CF1;
    color: white;
    padding: 10px 30px 10px 30px;
    box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
    border-radius: 4px;
`;
const SModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

`;
const Sdiv = styled.div`
    background-color: white;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
`;
function Further(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const {history} = props;
  return (
    <div>
        <form autoComplete="off">
        <SGrid container spacing={4}>
            <Grid item xs={12}>Further Details</Grid>
            <Grid item xs={7} spacing={10} >
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                            <TextField label="Website or Online Linking Site" placeholder="www..." fullWidth InputLabelProps={{shrink: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                            <TextField label="The primary area of your office/business" placeholder="Headquater" fullWidth InputLabelProps={{shrink: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                            <TextField label="Type of product" placeholder="Clothes/Accesories/etc" fullWidth InputLabelProps={{shrink: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                            <TextField label="Cost sheets" placeholder="Add cost sheet (defined format)" fullWidth InputLabelProps={{shrink: true }}/>
                    </Grid>
                    <Grid item xs={12}>
                            <TextField label="Additionally you’ll need a copy of - Shop License  /  PAN Details   /  GST Number " placeholder="Add copies" fullWidth InputLabelProps={{shrink: true }}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                 Write about your business/products
                 <STextareaAutosize minRows={20} maxRows={20}/>
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={2}>
                <SButton onClick={handleOpen}>Submit</SButton>
            </Grid>
        </SGrid>
        </form>
        <SModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Sdiv>
            <h2 id="transition-modal-title">Congratulations!!</h2>
            <h2 id="transition-modal-title">Your business is been added to Tech Company</h2>
            <p id="transition-modal-description">We’ll try giving you our best service</p>
            <SButton onClick={() => history.push("/businessprofile")}>Done</SButton>
          </Sdiv>
        </Fade>
      </SModal>
    </div>
  )
}

export default withRouter(Further)
