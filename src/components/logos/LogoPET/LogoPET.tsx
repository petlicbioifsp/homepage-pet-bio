import styles from './LogoPET.module.css'
import Logo from '../../../resources/logos/LogoPET.png'
import React from 'react';
function LogoPET(){
    return(
        <img className={styles.PETLogo} src={Logo} alt='Identidade Visual PET/ADS' />
    )

}
export default LogoPET;