import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import CartProvider from './components/CartProvider'
import ItemListContainer from './components/ItemListContainer'
import { useState } from 'react'
import CustomProvider from './components/CustomProvider'
import ItemDetailContainer from './components/ItemDetailContainer'
import Carrito from './components/Carrito'

function App() {
  
  return (
    <CustomProvider>
       
       <BrowserRouter>
          <NavBar />
          <main className='p-4 grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<ItemListContainer />} />
              <Route path="/categoria/:id" element={<ItemListContainer />} />
              <Route path="/detalle/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="*" element={<p>404</p>} />
            </Routes>
          </main>
        </BrowserRouter>
        <footer className='bg-blue-800 text-white'>
          <p>Footer</p>
        </footer>
        
    </CustomProvider>
  )
}

export default App