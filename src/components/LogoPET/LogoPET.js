import Logo from '../../resources/LogoPET.png'
import styles from './LogoPET.module.css'

function LogoPET(){
    return(
        <img className={styles.PETLogo} src={Logo} alt='Identidade Visual IFSP-SC' />
    )

}
export default LogoPET;