import IFSPLogo from '../../resources/LogoIfsp.png'
import styles from './LogoIFSP.module.css'

function LogoIFSP (){
    return(
        <img className={styles.IFSPLogo} src={IFSPLogo} alt='Identidade visual PET/ADS' />        
    )
}
export default LogoIFSP;