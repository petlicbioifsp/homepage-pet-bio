import React from "react";
import Link from "next/link";
import "./not-found.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="card-not-found">
        <img
          src="/images/not-found/folha.png"
          className="leaf-not-found top-left"
          alt="Folha decorativa no canto superior esquerdo"
        />
        <img
          src="/images/not-found/folha.png"
          className="leaf-not-found bottom-right"
          alt="Folha decorativa no canto inferior direito"
        />
        <img
          src="/images/not-found/cobra.png"
          alt="Ilustração de um experimento sendo realizado."
          className="img-not-found"
        />
        <h1 className="error-found">404</h1>
        <h3 className="text-not-found">
          Ops! Parece que você seguiu uma trilha que não leva a lugar algum.
          Volte e explore mais do nosso conteúdo sobre biologia!
        </h3>
        <Link href="/" className="return-home">
          Voltar para Home...
        </Link>
      </div>
    </div>
  );
};

export default NotFound;