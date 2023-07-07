import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <main className='p-4'>
        <ItemListContainer greeting="Bienvenido!"/>
      </main>
    </>
  )
}

export default App