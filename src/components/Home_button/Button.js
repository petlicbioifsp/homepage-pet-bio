import styles from "./Button.module.css"

import {Link} from "react-router-dom";
function Button({value,to}){
    return(
        <div className={styles.btn_contender} >
            <Link className={styles.btn} type='button' to={to}> 
                {value}
            </Link>
    
        </div>
       
    )

}export default Button;