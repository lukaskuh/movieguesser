import { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
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
