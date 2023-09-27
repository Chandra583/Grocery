import { useState } from 'react'
import React from 'react';
import { Outlet } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from "react";
import Header from './component/Header'
import toast, { Toaster } from 'react-hot-toast';
import { setDataProduct } from './redux/productSlide';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  const productData = useSelector((state)=>state.product)
 

  useEffect(()=>{
    (async()=>{
      const res = await fetch (`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json()
      console.log(resData)
      
      dispatch(setDataProduct(resData))
    })()
  },[])

 

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch(`${import.meta.VITE_REACT_APP_SERVER_DOMAIN}/product`);
  //       if (!res.ok) {
  //         // Handle non-OK responses (e.g., error responses)
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
        
  //       const resData = await res.json();
  //       console.log(resData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   })();
  // }, []);

  // useEffect(()=>{
  //   (async()=>{
  //     const res = await fetch (`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/product`)
  //     const resData = await res.json()
  //     console.log(resData)
  //   })();

  // },[]);

  return (
    <>
    <Toaster/>
    <div className='bg-white'>
        <Header/>
        <main className='pt-16% bg-slate-200 min-h-[calc(100vh)]'>
          <Outlet/>
        </main>
    </div>
    </>
  )
}
export default App
