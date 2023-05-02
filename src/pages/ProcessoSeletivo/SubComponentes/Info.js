function Info({ icone, nome, descricao, textoAlternativo }) {
    return (
        <div>
            <img src={icone} alt="teste" />
            {nome}
            {descricao}
        </div>
    )
}

export default Info