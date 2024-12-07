export default function ListItemProducts(props){
    return(
         <div className='d-flex m-4 align-items-center justify-content-center' >
      
        <img src={props.thumbnail} height={150} width={180} alt={props.title} className='border-radius me-4' />
       
         <h5 className='card-title me-4'>{props.title}</h5>
         <h6 className='mt-2 me-4'>Price: {`$${props.price}`}</h6>
         <h6 className='mt-2 me-4'>Discount: {props.discountPercentage}%</h6>
         <h6 className='mt-2 me-4'>Rating: {props.rating}</h6>
         <button className="btn btn-danger ms-3" onClick={props.incrementItems}>+</button>
         <span className="ms-3">Quantity : {props.count}  </span>
         <button className="btn btn-danger ms-3" onClick={props.decrementItems}>-</button>
         <button className="btn btn-danger ms-3" onClick={props.removeItems}>Remove</button>
        </div>
      
   
    )
}