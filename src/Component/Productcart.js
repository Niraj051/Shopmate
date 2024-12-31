import "./Productcart.css"


export const Productcart = ({data}) => {
  return (
    <div className='ProductCard'>
        <img src={data.image} alt="placeholder" />
        <p className="title">{data.name}</p>
        <div className="card">
            <p>{data.price}</p>
            <button className="buttons">Addto card</button>
        </div>

    </div>
  )
}
