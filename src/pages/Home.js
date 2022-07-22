import React, { useEffect, useState } from 'react'
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

  }, [])

const logOut = ()=>{
  localStorage.removeItem('user')
  window.location.reload();
}

  return (
    <>
      <header>
        <div className='login_wrapper'>
          <button className='login_button' onClick={logOut} style={{ display: loginUser ? "" : "none" }}>Logout</button>
          <Link className='login_button' to="/login" style={{ display: loginUser ? "none" : "" }}>Login</Link>
        </div>

      </header>
      <ListComponent />
    </>
  )
}

export default Home