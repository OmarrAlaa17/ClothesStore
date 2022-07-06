import React from 'react'
import classes from './style/video.module.css'
import Slider from './Slider'
import Rev1 from '../img/Rev1.jpg'
import Rev2 from '../img/Rev2.jpg'
import Rev3 from '../img/Rev3.jpg'
const Video = () => {
  return (
    <div className={classes.vContainer}>
        <h1 >
        Reviews
        </h1>

        <div className={classes.videoContainer}>
            <Slider img1={Rev1}
             img2={Rev2}
             img3={Rev3}/>
        </div>
    </div>
  )
}

export default Video