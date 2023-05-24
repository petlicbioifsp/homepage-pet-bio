import Logo from '../../resources/Icon.PNG'
import styles from './LogoPET.module.css'

function LogoPET(){
    return(
        <img className={styles.PETLogo} src={Logo} alt='Identidade Visual IFSP-SC' />
    )

}
export default LogoPET;