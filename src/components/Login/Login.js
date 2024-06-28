import React, { useState } from 'react'
import loginImage from './loginImage.png'
import './Login.css'

function Login() {

    let [userName,setUserName] = useState('')
 

    function handleLogin(event)
    {
        event.preventDefault();

    }

    const styleSheet = {
        "input":{border:"1px solid black",borderRadius:"10px",padding:"10px",margin:"10px"}
    }
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
      <form style={{border:"1px solid black",padding:"30px",marginTop:"50px"}}>
        <center><h3>Login</h3></center>
        <img style={{width:"150px",textAlign:"center",paddingLeft:"20px"}} src={loginImage}/>
        <br/>
        <input  style={styleSheet.input}  onChange={(event)=>{setUserName(event.target.value)}} type='text' placeholder='username'/>
        <br/>
        <center>
        <button className='LoginButton' onClick={(event)=>{handleLogin(event)}}>Login</button>
        </center>
      </form>
    </div>
  )   
}

export default Login
