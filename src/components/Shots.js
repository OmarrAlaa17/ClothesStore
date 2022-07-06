import React from 'react'
import classes from './style/shots.module.css'
import img1 from '../img/shot1.jpg'
import img2 from '../img/shot2.jpg'
import img3 from '../img/shot3.jpg'
import img4 from '../img/shot4.jpg'

const Shots = () => {
  return (
   <div className={classes.con}>
    <p>shots</p>
     <div className={classes.shotsContainer}>
        
        <div className={classes.imgContainer}>
            <img src={img1}/>
        </div>
        <div className={classes.imgContainer}>
            <img src={img2}/>
        </div><div className={classes.imgContainer}>
            <img src={img3}/>
        </div>
    </div>
   </div>
  )
}

export default Shots