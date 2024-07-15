import React, { useEffect, useState } from "react";
import "./Cartitem.css";

function Cartitem({ cartItems, setCartItems }) {
    console.log(cartItems);
    function remove(id){
      let newCartItems = cartItems.filter((item)=>{
        return id !== item.id;
      });
      setCartItems(newCartItems);
    }
    function increment(id){
      let newCartItems=cartItems.map((item)=>{
        if(id==item.id){
          return {...item, count: item.count + 1};
        }
        return item;
      })
      setCartItems(newCartItems);
  }
  function decrement(id) {
    let newCartItems = cartItems.map((item) => {
      if (id === item.id) {
        if (item.count === 1) {
          remove(id);
          return null;
        }
        return { ...item, count: item.count - 1 };
      }
      return item;
    }).filter(item => item !== null);
    setCartItems(newCartItems);
  }
  const [total,setTotal]=useState(0);
  useEffect(() => {
    function calculateTotal() {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.count;
      });
      setTotal(total);
    }

    calculateTotal();
  }, [cartItems]);
  function clearCart(){
    setCartItems([]);
  }
  if (cartItems.length === 0) {
    return (
      <div className="Cartmain">
        <h1>Cart is empty</h1>
      </div>
    );
  }
  return (
    <>
      <div className="Cartmain">
        <h1 className="heading">Your Bag</h1>
        <div className="cartItems">
          

          {cartItems.map((cartItem) => {
            return (
              <div className="cartItem" key={cartItem.id}>
                <div className="img">
                  <img src={cartItem.img} alt="" />
                </div>  
                <div className="detail">
                  <h1 className="name">{cartItem.name}</h1>
                  <div className="price">{cartItem.price}</div>
                  <button onClick={()=>remove(cartItem.id)}>Remove</button>
                </div>
                <div className="update">
                  <button onClick={()=>{increment(cartItem.id)}}>+</button>
                  <p>{cartItem.count}</p>
                  <button onClick={()=>{decrement(cartItem.id)}}>-</button>
                </div>
                
              </div>
            );
          })}
          <hr />
                <div className="cartTotal">
                  <div className="total">
                  <h2>Total</h2>
                  <h1>{total}</h1>
                  </div>
                  {/* <button onClick={()=>total}></button> */}
                <button className="clearCart" onClick={clearCart}>Clear Cart</button>
                </div>
        </div>
      </div>
    </>
  );
}

export default Cartitem;
