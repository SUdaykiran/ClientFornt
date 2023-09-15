import React from 'react'
import {useAuth} from './auth'
import {useNavigate} from 'react-router-dom'
const Profile =()=>{
    const auth=useAuth()
    const nav=useNavigate()
    const handlelogout=()=>{
        auth.logout()
        nav('/')
    }
    return (
        <div>
            Welcome User
            <button onClick={handlelogout}>Logout</button>
        </div>
    )
}
export default Profile