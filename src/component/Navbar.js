import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'
const Navbar=()=> {
    const auth=useAuth()
    return (
      <div>
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Service">Service</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!auth.user&&
        <NavLink to="/login">Login</NavLink>}
        </nav>
      </div>
    )
  }

export default Navbar
