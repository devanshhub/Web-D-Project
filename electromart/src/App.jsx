import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Cart from './pages/cart'
import PlaceOrders from './pages/PlaceOrders'
import About from './pages/About'
import Product from './pages/Product'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px-[7vm]  lg:px-[9vm]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeorders' elements={<PlaceOrders/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/signup' element={<Signup/>} />

      </Routes>
    </div>
  )
}

export default App