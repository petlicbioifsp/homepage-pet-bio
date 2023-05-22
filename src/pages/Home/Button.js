import {Link} from "react-router-dom";
function Button({value,to}){
    return(
        <div className="btn_contender" >
            <Link className="btn" type='button' to={to}> 
                {value}
            </Link>
    
        </div>
       
    )

}export default Button;