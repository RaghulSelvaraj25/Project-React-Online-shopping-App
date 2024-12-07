import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductList } from '../data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reduce/NameReducer';






export default function Product() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alert,setAlert] = useState(false);
    const props = ProductList.find((element)=>element.id === parseInt(params.id));
    const addToCart =() => {
      setAlert(true);
      setTimeout(()=>setAlert(false),3000);
        dispatch(addItem(props));
    };
    const list = useSelector((state)=>state.cart.list);
    const element = list.find((item)=>item.id===props.id);
  return (
   
    <div className='card m-2'>
      {alert && <span className='alert alert-success'>Item added to cart</span>}
      <div className='mt-2'>
        <img src={props.thumbnail} height={350} width={400} alt={props.title} className='border-radius' />
        <div className='card-body mt-3'>
         <h5 className='card-title'>{props.title}</h5>
         <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
         <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
         <h6 className='mt-2'>Rating: {props.rating}</h6>
         <div className='mt-4'>

            {props.stock>0 ? 
            (<><button className='btn btn-success' onClick={()=>navigate(`/checkout/${props.id}`)}>Buy Now</button>
            {element?.count>0?(<button className='ms-2 btn btn-outline-warning' onClick={()=>navigate('/cart')}>Go to cart</button>) :
            (<button className='ms-2 btn btn-success' onClick={addToCart}>Add to cart</button>)}</>): 
            (<button className='btn btn-outline-danger'>Out of stock</button>)}
         </div>
        </div>
      </div>
    </div>

  );
}

 
