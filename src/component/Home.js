import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
const Home =()=> {
    const navigate=useNavigate()
    return (
      <div>
        <h1>HOME PAGE</h1>
        <button onClick={()=>navigate("order",{replace:true})}>Order Now</button>
      </div>
    )
}

export default Home
