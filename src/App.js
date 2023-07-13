import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Productos from './components/pages/Productos'
import Categorias from './components/pages/Categorias'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main className='p-4 grow'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<Productos />} />
            <Route path="/categoria/:id" element={<Categorias />} />
            <Route path="/carrito" element={<p>carrito</p>} />
            <Route path="*" element={<p>404</p>} />
          </Routes>

        </main>
      </BrowserRouter>

      <footer className='bg-blue-800 text-white'>
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App