import React,{useContext,useState,useEffect} from "react";
import axios from 'axios';
const AuthContext=React.createContext(null)
const AuthProvider=(props)=>{
    const [userlist,setUserlist]=useState([])
    const [user,setUser]=useState(null);
    const login=(user)=>{
        setUser(user)
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>{
            setUserlist(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    const logout=()=>{
        setUser(null)
    }
    const Signup=(email,password,firstName,lastName)=>{
        axios.post('http://localhost:3000/users',{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return <AuthContext.Provider value={{user,login,logout,Signup,userlist}}>
        {props.children}
    </AuthContext.Provider>
}
const useAuth=()=>{
    return useContext(AuthContext)
}
export{AuthProvider,useAuth}