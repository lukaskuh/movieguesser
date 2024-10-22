import { useState } from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <header className='d-flex w-screen justify-center py-4'><h3><Link className="no-underline text-inherit transition-colors" to="/">Guess the Movie</Link></h3></header>}
      {isLoading 
      ? (<div className='d-flex h-screen w-screen items-center justify-center'>
          <p className=''>Loading...</p>
        </div>)
      : <Outlet />
      }
    </>
  )
}

export default App
