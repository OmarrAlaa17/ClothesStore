import React from 'react'
import classes from './style/card.module.css' 
import { Link } from 'react-router-dom';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Card = ({product}) => {

  return (
    <Link className={classes.card} to= {`/productdetails/${product.id}`}>
       <div className={`${product.quantity===0? classes.imgContainerSold: classes.imgContainer}`}>
        { product.quantity===0 &&
        <div className={classes.soldOut}>
        <p> Coming Soon </p>
        </div>
        }
        <img src={product.img} alt = 'product'/>
       </div>
       <div className={classes.cardInfo}>
            <p>{product.name}</p>
            <span>LE {product.price}.00</span>
       </div>
    </Link>
  )
}

export default Card