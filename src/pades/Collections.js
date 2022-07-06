import React from 'react'
import classes from './style/collections.module.css'
import { Link } from 'react-router-dom'
import img1 from '../img/jacket.jpg'
import img2 from '../img/bluse.jpg'
import img3 from '../img/shirt.jpg'
import img4 from '../img/short.jpg'
const Collections = () => {
  return (
    <div className={classes.collectonsContainer}>
        <h1>
            catalog
        </h1>
        <div className={classes.con}>
            <Link className={classes.card} to= '/collection/jackets'>
                <div className={classes.imgContainer}>
                    <img src={img1} alt='c'/>
                </div>
                <div className={classes.cardInfo}>
                    <p>jackets</p>
                </div>
            </Link>

            <Link className={classes.card} to= '/collection/bluse'>
                <div className={classes.imgContainer}>
                    <img src={img2} alt='c'/>
                </div>
                <div className={classes.cardInfo}>
                    <p>bluse</p>
                </div>
            </Link>

            <Link className={classes.card} to= '/collection/Te-shirt'>
                <div className={classes.imgContainer} >
                    <img src={img3} alt='c'/>
                </div>
                <div className={classes.cardInfo}>
                    <p>te-shirts</p>
                </div>
            </Link>

            <Link className={classes.card} to= '/collection/shorts'>
                <div className={classes.imgContainer} >
                    <img src={img4} alt='c'/>
                </div>
                <div className={classes.cardInfo}>
                    <p>shorts</p>
                </div>
            </Link>
        </div>

    </div>
  )
}

export default Collections