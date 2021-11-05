import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import './signup.css';
import api from './services/api'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    let payload = {email, password}

    var response = await api.post("users", payload);

    console.log(response);

    setUsers(response.data)
    
    try {
      var response = await api.post("/auth", payload);
      localStorage.setItem("hs:token", response.data.token)
      history.push("/home")
   } catch (err) {
      alert("Usuário ou senha inválidos")
      localStorage.removeItem("hs:token")
   }
}

  /*const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };
*/
  return (
      <div>
      <div>
          <h1> Sign up</h1>
      </div>
    <form className={classes.root} method='post' onSubmit={handleSubmit}>
        <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          <a href="./LoginPage"> Cancel </a>
        </Button>
        <Button type="submit" variant="contained" color="primary">
        Signup 
        </Button>
      </div>
    </form>
    </div>
  );
};

export default Form;