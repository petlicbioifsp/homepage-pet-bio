import styles from './LogoIFSP.module.css'
import IFSPLogo from '../../resources/LogoIfsp.png'
function LogoIFSP (){
    return(
        <img className={styles.IFSPLogo} src={IFSPLogo} alt='Identidade visual IFSP/SCL' />        
    )
}
export default LogoIFSP;