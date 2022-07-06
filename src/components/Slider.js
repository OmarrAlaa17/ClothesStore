import classes from "./style/Slider.module.css"
import { useState } from 'react';

function Slider (props) {
    const [Limage , LimageState]=useState(true);
    const [Mimage , MimageState]=useState(false);
    const [Rimage , RimageState]=useState(false);

    function Lclick(){
        LimageState(true);
        MimageState(false);
        RimageState(false);
    }
    function Mclick(){
        LimageState(false);
        MimageState(true);
        RimageState(false);
    }
    function Rclick(){
        LimageState(false);
        MimageState(false);
        RimageState(true);
    }


    return (
        <div className={classes.container}>
            {Limage ? <img className={classes.book} src={props.img1}/> : null}
            
            {Mimage ? <img className={classes.book} src={props.img2}/>:null}

            {Rimage ? <img className={classes.book} src={props.img3}/>:null}
            
            <ul>
                <h3> NOBODY DID IT LIKE 'ع'</h3>
                <span onClick={Lclick}/>
                <span onClick={Mclick}/>
                <span onClick={Rclick}/>
            </ul>
        </div>
    );
}

export default Slider;