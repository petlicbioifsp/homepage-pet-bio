import styles from './Cabecalho.module.css'
function Cabecalho  ({titulo,texto }){ 
return(
<div className={styles.cabecalho}>
    <h1 className={styles.titulo}>{titulo}</h1>
    <p className={styles.texto}>{texto}</p>
</div> 

)
}
export default Cabecalho; 