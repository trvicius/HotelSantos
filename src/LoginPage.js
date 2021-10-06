import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function LoginPage() {
    const history = useHistory();
    return (
        <div className="loginpage">
            <input type="text" placeholder="username" className="form-control-name"/>
            <input type="text" placeholder="password" className="form-control-pass"/>
            <Button onClick={() => history.push('/loginpage')}>Login</Button>
        </div>
    )
}

export default LoginPage
