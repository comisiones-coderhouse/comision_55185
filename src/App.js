import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import CartProvider from './components/CartProvider'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <main className='p-4 grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<ItemListContainer />} />
              <Route path="/categoria/:id" element={<ItemListContainer />} />
              {/* <Route path="/item/:id" element={<ItemDetailContainer />} /> */}
              {/* <Route path='/productos' element={<Home />} />
              <Route path="/categoria/:id" element={<Categorias />} /> */}
              <Route path="/carrito" element={<p>carrito</p>} />
              <Route path="*" element={<p>404</p>} />
            </Routes>
          </main>
        </BrowserRouter>
        <footer className='bg-blue-800 text-white'>
          <p>Footer</p>
        </footer>
      </CartProvider>
    </>
  )
}

export default App