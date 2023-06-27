function Header () {
  return (
    <header className='flex p-2 justify-between bg-blue-300 shadow'>
      <h1 id='titulo'>Titulo</h1>
      <nav className='flex gap-2'>
        <a href='#'>link</a>
        <a href='#'>link</a>
        <a href='#'>link</a>
      </nav>
    </header>
  )
}

export default Header
