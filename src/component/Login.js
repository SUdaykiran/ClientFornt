import React, { Component, useState } from 'react'
// import {useState} from 'react';
// import './login.css'
import {useAuth} from './auth';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const auth=useAuth()
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [ilis,setIlis]=useState(true)
    // const [pass,setPass]=useState('')
    const changeuser=(event)=>{
            setEmail(event.target.value)
        
    }
    const changepass=(event)=>{
        setPassword(event.target.value)
    
}
    const handlelogin=(event)=>{
        console.log(auth.userlist)
        auth.userlist.map(x=>{
            if(x.email===email && x.password===password){
                auth.login(email)
        navigate('/loginsuccess')  
        setIlis(true)
            }
            else{
                setIlis(false)
            }
        })
        event.preventDefault()
      
    }
    return(
        

        <div className='loginbackground'>
            {/* <div></div> */}
        <div className='login'>
             
            <form onSubmit={handlelogin}>
                <h1 style={{color:'black'}}>Login</h1>
            <label>Email: </label><br></br>
            <input type='text' value={email} onChange={changeuser} required/><br></br>
            <label>Password:</label><br></br>
            <input type='password' value={password} onChange={changepass} required/><br></br>
            <button type='submit'>Login</button>
           
            {!ilis?<p>Invalid User and password</p>:''}
            <h3>If you dont have account  </h3>
            <a href='/signup'style={{backgroundColor:'white',padding:2}}>Signup</a>
            </form>
            <br></br>
        </div>
        </div>
        
    
    )

}
export default Login