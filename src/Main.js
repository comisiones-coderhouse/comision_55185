// import Card from './Card'

import Contador from './Contador'

/*
function Card (data) {....}

Card({title : "",image:"",body:""})

<Card title="" image="" body="" />
*/

function Main () {
  const saludar = () => { console.log('Soy una fn anonima') }

  return (
    <main className='grow p-2'>
      <h2>Soy el Home </h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>

        {/* <Contador edad={34} vive persona={{ nombre: 'Tito', edad: 50 }} /> */}
        {/* <Contador edad={34} vive={false} persona={{ nombre: 'Tito', edad: 50 }} /> */}

        <Contador saludar={saludar} />

        {/*

        <Card title='Card 1' image='https://picsum.photos/200/300' likes={[10, 15]} />
        <Card title='Card 2' image='https://picsum.photos/300/500' likes={[10, 15]} />
        <Card title='Card 3' image='https://picsum.photos/250/400' likes={[10, 15]} />
        <Card title='Card 3' image='https://picsum.photos/270/450' likes={[10, 15]} />

        */}

      </section>
    </main>
  )
}

export default Main
