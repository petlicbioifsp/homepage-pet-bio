import styles from './Title.module.css'
function Title({title, content}){
    return(
        <header className={styles.cabecalho}>
        <div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{content}</h2> 
       </div>
        </header>
    )
} export default Title;