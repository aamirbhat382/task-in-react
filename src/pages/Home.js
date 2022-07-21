import React, { useEffect,useState } from 'react'
import { Link } from "react-router-dom"
import ListComponent from '../componentss/ListComponent'

function Home() {
  const [loginUser, setLoginUser] = useState()
  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (user === null || user === undefined) {
      setLoginUser(false)
    } else {
      setLoginUser(true)
    }

  },[])
  return (
    <>
      <header>
        <div className='login_wrapper'>

    <Link className='login_button' to="/logout">Logout</Link>
    
           

            {/* <Link className='login_button' to="/login">Login</Link> */}
         
        </div>

      </header>
      <ListComponent />
    </>
  )
}

export default Home