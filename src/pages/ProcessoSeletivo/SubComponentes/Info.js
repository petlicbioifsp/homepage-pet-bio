import './Info.css'

function Info({ icone, nome, descricao, textoAlternativo }) {
    return (
        <div className="info">
            {icone}
            <h3 className="info--titulo"> {nome}</h3>
            <p className="info--descricao">{descricao}</p>
        </div>
    )
}

export default Info