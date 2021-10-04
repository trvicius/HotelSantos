import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

function LoginPage() {
    const history = useHistory();

    return (
        <div className="LoginPage">
            <input type="text" placeholder="username" className="form-control-name"/>
            <input type="text" placeholder="password" className="form-control-pass"/>
            <button onClick={() => history.push('/LoginPage')}>Login</button>
        </div>
    )
}

export default LoginPage
