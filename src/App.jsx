import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
