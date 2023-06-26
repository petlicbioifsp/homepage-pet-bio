import React from 'react';
import Collapsible from 'react-collapsible';
import CollapsibleOpen from '../../components/Faq/CollapsibleOpen';
import CollapsibleTrigger from '../../components/Faq/CollapsibleTrigger';
import MenuNavegacao from '../../components/MenuNavegacao/menuNavegacao';
import FetchFaq from '../../components/Faq/FetchFAQ';
import './Faq.css';

export default function Faq() {
  return (
    <body>
      <MenuNavegacao />
      <h2 className="faq-titulo">Perguntas Frequentes</h2>
      <section className="faq--caixa__perguntas">
        <FetchFaq
          render={(arrFaq) =>
            arrFaq.map((faqs) => (
              <Collapsible
                key={faqs.id}
                trigger={<CollapsibleTrigger text={faqs.trigger} />}
                triggerWhenOpen={<CollapsibleOpen text={faqs.trigger} />}
              >
                <p className="faq-resposta">{faqs.resposta}</p>
              </Collapsible>
            ))
          }
        />
      </section>
    </body>
  );
}
