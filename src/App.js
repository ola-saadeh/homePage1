import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './component/Loading/Loading'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import About from './component/About/About'
import Service from './component/Service/Service'
import Programs from './component/Programs/Programs'
import Activities from './component/Activities/Activities'
import Staff from './component/Staff/Staff'
import Quote from './component/Quote/Quote'
import Contacting from './component/Contacting/Contacting'
import Mapp from './component/Mapp/Mapp'
import Footer from './component/Footer/Footer'

 
 


export default function App() {
  return (
    <div>
       {/* <Loading/> */}
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Programs/>
      <Activities/>
      <Staff/>
      <Quote/>
      <Contacting/>
      <Mapp/>
      <Footer/>
      
    {/* <Routes>
      <Route path='/' element={<Home/>}></Route>
     
    </Routes>
    <Footer/> */}
    
  </div>
  )
}
