import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ListItemProducts from "../components/ListItemProducts";
import { modifyItems, removeItems } from "../redux/reduce/NameReducer";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const incrementItems = (item) => {
    dispatch(modifyItems({ ...item, count: item.count + 1 }));
  };
  const decrementItems = (item) => {
    if (item.count === 1) {
      dispatch(removeItems(item));
    } else {
      dispatch(modifyItems({ ...item, count: item.count - 1 }));
    }
  };
  const removeItemsFromCart = (item) => {
    dispatch(removeItems(item));
  };
  return (
    <div>
      <>
        {list.length > 0 ? (
          <>
            {list.map((item) => (
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
              onClick={() => navigate("/checkout")}
            >
              Go to checkout
            </button>
          </>
        ) : (
          <h3>No Items in the cart</h3>
        )}
      </>
    </div>
  );
}

export default CartPage;
