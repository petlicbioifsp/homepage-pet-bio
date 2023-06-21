import styles from './Title.module.css'
import LogoPET from '../LogoPET/LogoPET';
function Title({title, content}){
    return(
        <header className={styles.cabecalho}>
        <div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{content}</h2> 
       </div>
        <LogoPET />
        </header>
    )
} export default Title;