function Etapa({ numero, titulo, descricao }) {
  return (
    <>
      <div>
        <div>Etapa {numero}</div>
        <div>{titulo}</div>
        <div>{descricao}</div>
      </div>
    </>
  );
}

export default Etapa;