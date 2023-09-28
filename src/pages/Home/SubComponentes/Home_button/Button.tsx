import React from 'react'
import {Link} from "react-router-dom";
import styles from "./Button.module.css"
import useScrollToTop from "../../../../hooks/window/useScrollToTop";

interface ButtonPropsInterface{
    value:string, 
    to:string
}


function Button({value,to}:ButtonPropsInterface){
    return(
        <div className={styles.btn_contender} >
          
            <Link className={styles.btn} type='button' to={to} onClick={useScrollToTop}> 
                {value}
            </Link>
    
        </div>
       
    )

}export default Button;