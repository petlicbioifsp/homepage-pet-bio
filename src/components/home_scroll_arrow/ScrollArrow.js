import React, { useState } from 'react';
import './ScrollArrow.css'; // Create a CSS file for styling

const ScrollArrow = () => {
    //declara uma variável de estado e uma função usando useState para controlar a visibilidade
    // da seta. O valor inicial é TRUE, indicando que começa visível.
    const [showArrow, setShowArrow] = useState(true);

    //função para deslizar ao clicar
    const deslizaClick = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    //checa em que altura está a página. Mais que a metade para baixo = Visibilidade setada para falso.
    //Se estiver da metade para cima = Visibilidade = TRUE
    const checaAltura = () => {
        if (window.scrollY > window.innerHeight * 0.5) {
            setShowArrow(false);
        } else {
            setShowArrow(true);
        }
    };

    //coloca um gatilho de evento para chamar checaAltura toda vez que o usuário scrollar
    window.addEventListener('scroll', checaAltura);

    return (
        <div className={`scroll-arrow ${showArrow ? 'visible' : ''}`} onClick={deslizaClick}>
            <span className="arrow"></span>
        </div>
    );
};

export default ScrollArrow;
