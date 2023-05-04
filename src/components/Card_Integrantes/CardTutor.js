import styles from 'path_name'

function CardTutor({nome, srcFoto}) {
    

    function Evento() {
        console.log('Teste do evento')
    }



    var altFoto =`Foto de ${nome}, tutor do PET ADS IFSP-Sao Carlos`
    return(
        <div className={styles.imgContainer}>
            <img onMouseOver={Evento} className={styles.imgContent} src={srcFoto} alt={altFoto}/>
            <p className={styles.nome}> {nome} </p>
            <p className={styles.tutor}>Tutor</p>

        </div>
    )
}

export default CardTutor
