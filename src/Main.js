// import Card from './Card'

import Checkout from './Checkout'
import Contador from './Contador'

function Main () {
  
  return (
    <main className='grow p-2'>
      <h2>Soy el Home </h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {/* <Contador stock={10} />
        <Contador stock={4} /> */}
        <Checkout/>
      </section>
    </main>
  )
}

export default Main
