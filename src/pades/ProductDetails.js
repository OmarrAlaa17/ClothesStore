import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import classes from './style/productDetails.module.css'
import products from './dummyData';
import DetailsImg from '../components/DetailsImg';
import {useDispatch} from 'react-redux'

import { SliderData } from '../components/SliderData';

const ProductDetails = () => {
const dispatch = useDispatch()

    const {id} = useParams();
    const [product,setProduct] = useState({});
    const [count,setCount]= useState(1)

    useEffect(()=>{
        setProduct(products[id]);
    },[id])
const addHandeler = ()=>{
  dispatch({type: "add", count: count, id: id , name: product.name, price:product.price , img: product.img})
}
  return (
    <div className={classes.productDetailesCon}>
       <div className={classes.imgContainer}>
            <DetailsImg slides={product.allImg} />
       </div>
       <div className={classes.details}>
            <h1>{product.name}</h1>
            <div className={classes.price}>
                <p>LE {product.price}.00</p>
            </div>

            <div className={classes.size}>
                <p>Size</p>
                  <div className={classes.fixCon}>
                        <div className={classes.lableCon}>
                          <label className={classes.container}> <h4>M</h4>
                          <input type='radio'  name="radio"/>
                          <span className={classes.checkmark}></span>
                          </label> 
                          </div>
                          <div>
                          <label className={classes.container}> <h4>S</h4>
                          <input type='radio' name="radio"/>
                          <span className={classes.checkmark}></span>
                          </label> 
                          </div>
                          <div>
                          <label className={classes.container}> <h4>XL</h4>
                          <input type='radio' name="radio"/>
                          <span className={classes.checkmark}></span>
                          </label> 
                          </div>
                          <div>
                          <label className={classes.container}> <h4>XXL</h4>
                          <input type='radio' name="radio"/>
                          <span className={classes.checkmark}></span>
                          </label> 
                          </div>
                  </div>
            </div>
            <div className= {classes.opt}>
              <div className={classes.control}>
              <span onClick={()=> setCount(count+1)} className={classes.fix}>+</span>
              <p>{count}</p>
              <span onClick={()=> count>1 && setCount(count-1) } className={classes.fix}>-</span>
              </div>
          </div>
          {
            product.quantity >0 ? <div className={classes.btn}>
            <button onClick={addHandeler}>ADD TO CART</button>
        </div> : <div className={classes.btns}>
                  <button className={classes.soldout}> Sold Out</button>
              </div>
          }
       </div>
    </div>
  )
}

export default ProductDetails
