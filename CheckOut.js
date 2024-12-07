import React, { useState } from "react";
import { useSelector } from "react-redux";

import ListItemProducts from "../components/ListItemProducts";

import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";

export default function CheckOut() {
    const params = useParams();
  const list = useSelector((state) => state.cart.list);
  const [state,setState]= useState(params.id?[{
    ...ProductList.find((element)=> element.id===parseInt(params.id)), count: 1,

  },] : list);
  
  const navigate = useNavigate();
  const incrementItems = (item) => {
    const index= state.findIndex(
        (product)=>product.id === item.id
    );
    setState((state)=>[
        ...state.slice(0,index),
        {...item, count: item.count+1},
        ...state.slice(index +1),


    ]); 
  };
  const decrementItems = (item) => {
    if (item.count === 1) {
      removeItemsFromCart(item);
    } else {
        const index= state.findIndex(
            (product)=>product.id === item.id
        );
        setState((state)=>[
            ...state.slice(0,index),
            {...item, count: item.count-1},
            ...state.slice(index +1),
    
    
        ]); 
    }
  };
  const removeItemsFromCart = (item) => {
    const index= state.findIndex(
        (product)=>product.id === item.id
    );
    setState((state)=>[
        ...state.slice(0,index),
       
        ...state.slice(index +1),


    ]); 
  };
  return (
    <div>
      <>
        {state.length > 0 ? (
          <>
            {state.map((item) => (
              <ListItemProducts
                {...item}
                key={item.id}
                incrementItems={() => incrementItems(item)}
                decrementItems={() => decrementItems(item)}
                removeItems={() => removeItemsFromCart(item)}
              />
            ))}
            <button
              className="btn btn-success"
              onClick={() => navigate("/success")}
            >
              Place order
            </button>
          </>
        ) : (
          <h3>No Items in the Checkout</h3>
        )}
      </>
    </div>
  );
}



