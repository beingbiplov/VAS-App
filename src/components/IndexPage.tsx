import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext'
import { Logout } from './pages/Logout'

function IndexPage() {
  const authContext = useContext(AuthContext)

    if (authContext?.isLoggedIn){
     return(
        <div>
          <p>
            Welcome! <a>{authContext.username}</a>
          </p>
          < Logout />
        </div>
      )
    }
    else{
      return(
        <div>
          <p>
            <Link to="/login">Login</Link>
          </p>
        </div>
      )
    }
}

export default IndexPage;
