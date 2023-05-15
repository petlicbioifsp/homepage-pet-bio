import styles from './CardAluno.module.css'

function CardAluno({nome, srcFoto, ano}) {
    

    function Evento() {
        console.log('Teste do evento')
    }



    var altFoto =`Foto de ${nome}, integrante do PET ADS IFSP-Sao Carlos`
    return(
        <>
            <div className={styles.card}>
                <img onMouseOver={Evento} className={styles.img} src={srcFoto} alt={altFoto}/>
                <p className={styles.p}><b>Nome:</b> {nome} </p>
                <p className={styles.p}><b>Ingresso:</b> {ano} </p>
            </div>
        </>
    )
}

export default CardAluno
