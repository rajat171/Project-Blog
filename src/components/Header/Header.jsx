import React from 'react'
import {Container , Logo , LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' 
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status
  )
  const navigate = useNavigate();
 
  // an array is created and looped for navigation bar
  // this is done because when new elements has to be added
  // we can directly add an object
  const navItems = [
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active: !authStatus //will not be displayed if
                         //the user is already logged in
    },
    {
      name:"Signup",
      slug:"/signup",
      active: !authStatus,
    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active: authStatus, //displayed if user is logged in
    },
    {
      name:"Add Post",
      slug:"/add-post",
      active: authStatus, //can add if user is logged in
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                {//link and navigate are same
                //link has to be a tag that's it
                }
                  <button
                  onClick={()=>navigate(item.slug)}
                  className='inline-block px-6 py-2 
                  duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null //dont display if item is not there
            )}
            {//show logout only if authenticated
            }
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header