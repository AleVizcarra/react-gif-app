
const GifGridItem = ({id, title, gif}) => {

    return (
    <div className="card animate__animated animate__fadeIn">
        <img src={gif} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem