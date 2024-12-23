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
    <div className='flex h-screen flex-col items-center justify-between'>
      {!isHome && <header className='d-flex w-screen justify-center py-4'><h3><Link className="no-underline text-inherit transition-colors" to="/">Guess the Movie</Link></h3></header>}
      {isLoading 
      ? (<div className='d-flex w-screen h-screen items-center justify-center'>
          <p className=''>Loading...</p>
        </div>)
      : <Outlet />
      }
      <footer className='flex flex-row items-center justify-center gap-2 border-t w-11/12 py-2'>
        <p className='text-xs text-slate-400 m-0'>Made by Axel Wennerlund & Lukas Kuhlin</p>
        <p className='text-xs text-slate-400 m-0'>This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.</p>
        <a href="https://www.themoviedb.org/"><img className='h-1.5' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" /></a>
      </footer>
    </div>
  )
}

export default App
