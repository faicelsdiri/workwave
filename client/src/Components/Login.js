import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {TextField } from "@material-ui/core";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../Redux/actions';
function Login() {
    const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("")
  const [motDePasse, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user_login = () => {
    const formData = {
        email,
        motDePasse
    }
    dispatch(login(formData))
    handleClose()
    navigate("/dashboard")
  }


    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    return ( <div>
        <Button variant="outlined" color="success" onClick={handleShow}>
      
      Login
    </Button>
        <Modal
          isOpen={show}
        
          style={customStyles}
          
        >
          
         
          <TextField
              label="Email"
              fullWidth
              margin="normal"
              onChange={(e)=>{setEmail(e.target.value)}}
                
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              onChange={(e)=>{setPassword(e.target.value)}}
              
            />
           <div style={{textAlign:"center"}}>
            <Button variant="contained" color="success" style={{marginRight :"5px"}} onClick={user_login} >
  Login
</Button>
<Button variant="contained" color="error">
  Close
</Button></div> 

        </Modal>
      </div>);
}

export default Login;