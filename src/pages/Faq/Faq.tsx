import React from 'react';
import './Faq.css';
import FetchFaq from '../../hooks/fetch/useFetchFAQ';
import Header from '../../components/ui/Header/header';
import { renderFaq } from './Subcomponents/RenderFaq';
import MenuNavegacao from '../../components/menus/MenuNavegacao/menuNavegacao';



export default function Faq(): JSX.Element{
  return (
    <div>
      <MenuNavegacao />
      <Header texto="Perguntas Frequentes" />

      <section className="faq--caixa__perguntas">
        <FetchFaq render={renderFaq} />
      </section>
    </div>
  );
};

