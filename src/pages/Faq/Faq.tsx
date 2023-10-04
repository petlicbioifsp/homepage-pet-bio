import React from 'react';
import './Faq.css';
import Collapsible from 'react-collapsible';
import { IFaq } from '../../types/FaqTypes';
import FetchFaq from '../../hooks/fetch/useFetchFAQ';
import Header from '../../components/ui/Header/header';
import CollapsibleOpen from '../../hooks/collapsible/useCollapsibleOpen';
import CollapsibleTrigger from '../../hooks/collapsible/useCollapsibleTrigger';
import MenuNavegacao from '../../components/menus/MenuNavegacao/menuNavegacao';

export default function Faq() {
  return (
    <div>
      <MenuNavegacao />
      <Header texto="Perguntas Frequentes" />

      <section className="faq--caixa__perguntas">
        <FetchFaq
          render={(arrFaq: IFaq[]): JSX.Element[] =>
            arrFaq.map((faqs) => (
              <Collapsible
                key={faqs.id}
                trigger={<CollapsibleTrigger text={faqs.trigger} page="FAQ" />}
                triggerWhenOpen={<CollapsibleOpen text={faqs.trigger} page="FAQ" />}
              >
                <p className="faq-resposta">{faqs.resposta}</p>
              </Collapsible>
            ))
          }
        />
      </section>
    </div>
  );
}
