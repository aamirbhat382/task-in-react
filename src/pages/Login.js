import React from 'react'
import {Link} from "react-router-dom"
import {  useState} from "react";
import {storeUser } from "../helper";
import {Navigate} from 'react-router-dom'
function Login() {
    const [values, setValues ] = useState({
        username:"",
        password:"",
        error:false,
        loading:false,
        didRedirect:false
      });
      const {username,password,error,loading,didRedirect}= values
      const handleChange = name => event=>{
        setValues({...values, error:false, [name]: event.target.value});
       };
       const onSubmit = event =>{
        event.preventDefault()
        setValues({...values,error:false, loading:true})
        if(username !== 'foo' && password !== 'bar'){
            setValues({...values,error:true, loading:false, didRedirect:false})
        }else{
        const user = {username,password}
        storeUser(JSON.stringify(user))
        setValues({...values,error:false, loading:false, didRedirect:true})
        }
      };
      const performRedirect =()=>{
        if(didRedirect){
          
            return   <Navigate to="/" />  
          
        }
        
      }
      const errorMessage = () => {
        return (
          <div className="error_Message" style={{ display: error ? "" : "none" }}>
           Wrong Username Or Password
          </div>
        );
      };
  return (
    <>
    {/* {loadingMessage()} */}
        {errorMessage()}
        
        {performRedirect()}
    <Link to='/' className='arrow-left'>Back</Link>
    <div className='login_container'>
        <h1>Login</h1>
        <input type='text' value={username} onChange={handleChange("username")} placeholder='username' />
        <input type='password' value={password} onChange={handleChange("password")} placeholder='password' />
        <button onClick={onSubmit}>Login</button>
    </div>
    </>
  )
}

export default Login