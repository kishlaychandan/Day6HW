import React from 'react'
import './Navbar.css'
import { FaCartArrowDown } from "react-icons/fa";
function Navbar({cartItems, setCartItems}) {
    let count=0;
    for (let cartItem of cartItems){
        count+=cartItem.count;
    }
  return (
    <>
        <div className="nav">
            <div className="logo"><img src="" alt="LOGO" /></div>
            <p><FaCartArrowDown/>: {count}</p>
        </div>
    </>
  )
}

export default Navbar;