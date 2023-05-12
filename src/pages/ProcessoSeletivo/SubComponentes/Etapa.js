import './Etapa.css'

function Etapa({ numero, titulo, descricao }) {
  return (
    <>
      <div className='etapa'>
        <h3 className="etapa--titulo">Etapa {numero}</h3>
        <h4 className="etapa--titulo-secundario">{titulo}</h4>
        <p className='etapa--descricao'>{descricao}</p>
      </div>
    </>
  );
}

export default Etapa;