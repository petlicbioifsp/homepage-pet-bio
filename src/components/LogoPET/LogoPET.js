import styles from './LogoPET.module.css'
import Logo from '../../resources/LogoPET.png'
function LogoPET(){
    return(
        <img className={styles.PETLogo} src={Logo} alt='Identidade Visual PET/ADS' />
    )

}
export default LogoPET;