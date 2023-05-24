import styles from './ImgContender.module.css'
import LogoPET from '../LogoPET/LogoPET'
import LogoIFSP from '../LogoIFSP/LogoIFSP'
function ImgContender(){
    return(
        <div className={styles.imgContender}>  
        <LogoIFSP/>
        <LogoPET/>                  
        </div>
    )
}
    export default ImgContender