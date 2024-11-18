import React, { useState } from 'react'
import { login, logout } from './store';
import { useDispatch, useSelector } from 'react-redux'

// useDispatch is for modifying state, but useSelector is for getting states
const Login = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username)
    const [newuser, setUser] = useState("");


  return (
    <div>
        <p>username  is {username}</p>
        <input type="text"   onChange={(e)=>{setUser(e.target.value)}}/>
        <button onClick={() => dispatch(login({username: newuser}))}>Login</button>
        <button onClick={()=>dispatch(logout())}>Log out</button>
    </div>
  )
}

export default Login