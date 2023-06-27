function Card (props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <img src={props.image} alt='imagen' className='w-full max-h-[200px] object-cover' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      <p>Likes : {props.likes[0]}</p>
      <p>DisLikes : {props.likes[1]}</p>
      <button>ver detalle</button>
    </article>
  )
}

export default Card
