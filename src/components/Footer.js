import React from 'react'
import classes from './style/footer.module.css'
import img from '../img/logo.jpg'
const Footer = () => {
  return (
    <div className={classes.footer}>
       
         <div className={classes.logoContainer}>
            <div className= {classes.logo}>
                <img src={img} alt='logo'/>
            </div>
            <div className={classes.logoName}>
                <h1>Montu</h1>
            </div>

         </div>

    </div>
  )
}

export default Footer