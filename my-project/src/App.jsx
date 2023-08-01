import { useState } from 'react'
import { Outlet } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'

function App() {

  return (
    <div className='bg-white'>
        <Header/>
        <main className='pt-16%'>
          <Outlet/>
        </main>
    </div>
  )
}
export default App
