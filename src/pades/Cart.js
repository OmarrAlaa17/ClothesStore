import React from 'react'
import classes from './style/cart.module.css'
import { useSelector} from 'react-redux'
import { useState,useEffect } from 'react';
import Cartitem from '../components/Cartitem';
import img from '../img/check.png'
const Cart = () => {
  const Data=  useSelector(state => state);
  const [totalAmount,setTotalAmount] = useState(0);
  useEffect(()=>{
    if(Data){
    let totalPrice = 0;
    Data.map((p) => {  
      totalPrice += p.price * p.count
      return totalPrice;
    })
    setTotalAmount(totalPrice)
    }
  },[Data])
  return (
    <div className={classes.cartContainer}>
        <h1>
            cart
        </h1>
      {
        totalAmount=== 0? <div className={classes.head}><h1 >Cart is empty</h1></div> :
        <div className={classes.cont}>
        <div>
            <div className={classes.productContainer}>
            { Data &&
              Data.map(p=> <Cartitem key={p.id} product = {p} />)
            }
            </div>
            <div>
          <p>Total Amount : {totalAmount}</p>
          </div>
        </div>
        <div className={classes.sideCon}>
            <h1>Total</h1>
            <div className={classes.cartD}>
                <h1 className={classes.fix}>
                    <span>Sub Total: </span>
                    <span>{totalAmount}</span>
                </h1>
                <h1 className={classes.fix}>
                    <span>Delivery: </span>
                    <span>50</span>
                </h1>
                <h1 className={classes.fix}>
                    <span> Total: </span>
                    <span>{totalAmount+50}</span>
                </h1>
            </div>
            <div>
            <div className={classes.btn}>
            <button >Checkout</button>
             </div> 
            </div>
        </div>
        </div> 
      }
    </div>
  )
}

export default Cart
