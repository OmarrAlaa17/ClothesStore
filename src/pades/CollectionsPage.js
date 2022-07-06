import React from 'react'
import classes from './style/allproducts.module.css'
import { useParams } from 'react-router-dom'
import products from './dummyData';
import { useEffect,useState } from 'react';
import Card from '../components/Card'
const CollectionsPage = () => {
    const {id} =useParams();
    const [lisproduct,setlisProduct] = useState([]);
    useEffect(()=> {
        setlisProduct(products.filter((p)=> p.collection=== id));
    }, [id])

  return (
    <div className={classes.allproductContainer}>
         <h1>
            {id}
        </h1>
        <div className={classes.cardContainer}>
            {lisproduct.map(p=> <Card product={p}  key={p}/>)}
        </div>
    </div>
  )
}

export default CollectionsPage