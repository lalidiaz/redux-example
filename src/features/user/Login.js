import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logout, selectUser } from './userSlice';
import './Login.css';

export default function Login(){
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const loginToApp = () => {
    dispatch(setUser({ user: 'Laliii'}))
  }


  return(
    <div className='wrapper'>
      <h2> I am the login component</h2>
      {user ? <h2>The user is: {user}</h2> : <h2>Nobody is signed in.</h2>}
      <button onClick={loginToApp}>LOG ME IN</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>  
    )
}