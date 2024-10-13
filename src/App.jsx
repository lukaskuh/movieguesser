import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  console.log("hej");

  return (
    <Outlet />
  )
}

export default App
