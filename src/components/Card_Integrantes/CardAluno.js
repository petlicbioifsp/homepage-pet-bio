import styles from './CardAluno.module.css'

function CardAluno({nome, srcFoto}) {
    

    function Evento() {
        console.log('Teste do evento')
    }



    var altFoto =`Foto de ${nome}, integrante do PET ADS IFSP-Sao Carlos`
    return(
        <div className={styles.imgContainer}>
            <img onMouseOver={Evento} className={styles.imgContent} src={srcFoto} alt={altFoto}/>
            <p className={styles.p}> {nome} </p>
        </div>
    )
}

export default CardAluno
