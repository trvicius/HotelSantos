import React, {useEffect, useState} from 'react'
import './Header.css'
import api from "./services/api"



function Header() {

const [authorized, setAuthorized] = useState(false)
  const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("hs:token"))
    
	const checkAuthentication = async (token) => {
    try {
    const res = await api.get("/users", { headers: { "Authorization": "Bearer " + token } })
      setAuthorized(res.status == 200)
    } catch (err) {
      setAuthorized(false)
    }
    setLoading(false)
}

  useEffect(() => {
    if (!authorized) {
        checkAuthentication(token);
    }
  }, [token]);

    return (
        <div className='header'>
            <div className='header__logo'>
                <a href='/home'>HS</a>
            </div>

            <div className='header__center'>
                {/*<input type="text" />*/}
                {/*<SearchIcon />*/}
            </div>

            <div className='header__right'>  
                  
                <a href='./search'>Quartos</a>
                <a href='./Contato'>Contatos</a>
                <a href='./Booked'>Reservas</a>  
                {authorized ? <a href="./" onClick={() => localStorage.removeItem("hs:token")}>Logout</a> : <a href='./'>Login</a>} 
               
                
            </div>
        </div>
    )
}

export default Header;