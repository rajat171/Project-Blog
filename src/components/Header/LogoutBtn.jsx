import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        //this method gives a promise and if successful
        //call the logout function with the dispatch
        authService.logout()
        .then(() => {
            dispatch(logout());
        })
        .catch((error) => {
            console.log("unable to logout")
        });
    }
  return (
    <button 
    className='inline-block px-6 py-2 duration-200 
    hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn