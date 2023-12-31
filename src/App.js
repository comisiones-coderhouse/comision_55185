import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import ItemListContainer from './components/ItemListContainer'
import CustomProvider from './components/CustomProvider'
import ItemDetailContainer from './components/ItemDetailContainer'
import Carrito from './components/Carrito'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar />
        <main className='p-4 grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<p>404</p>} />
          </Routes>
        </main>
      </BrowserRouter>
      <footer className='bg-blue-800 text-white'>
        <p>Footer</p>
      </footer>
      <ToastContainer />
    </CustomProvider>
  )
}

export default App