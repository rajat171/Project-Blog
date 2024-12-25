import React, { useState , useEffect} from 'react'
import {useDispatch} from 'react-redux' 
import './App.css'
import authService from './appwrite/auth';
import { login , logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  //will change it inside the useEffect hook
  //because here i want loading to be true when initially app is rendered
  const [loading,setLoading] =useState(true);
  const dispatch = useDispatch();
  
  //at first check whether the user is logged in with useEffect
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
        if(userData){
          dispatch(login({userData}))}
        else {
          dispatch(logout())
        }
      })
    .finally(()=> setLoading(false))
  }, [])
  
  //conditional rendering
  return !loading ?( <div className='min-h-screen flex flex-wrap 
    content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO:<Outlet />
        </main>
        <Footer />
      </div>
    </div> 
  ) : (<div>LOADING...</div>)
}

export default App
