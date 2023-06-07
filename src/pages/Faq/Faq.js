import React, { useState, useEffect } from 'react';
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Collapsible from 'react-collapsible'
import "./Faq.css"
import CollapsibleTrigger from "../../components/Faq/CollapsibleTrigger"
import CollapsibleOpen from "../../components/Faq/CollapsibleOpen"


export default function Faq() {
    const [arrFaq, setFaq] = useState([]);

    useEffect(() => {
        const fetchFaq = async () => {
          try {
            const response = await fetch('./faq.json');
            const data = await response.json();
        
            setFaq(data.faqs);
            console.log(data.faqs)
          } catch (error) {
            console.error('Ocorreu um erro ao obter o FAQ:', error);
          }
        };
    
        fetchFaq();
      }, []);

    return (

        <body>
            <MenuNavegacao></MenuNavegacao>

            <h2 className="faq-titulo">Perguntas frequentes</h2>
            <section className="faq--caixa__perguntas">

                {arrFaq.map((faqs) => (
                <Collapsible 
                trigger={<CollapsibleTrigger text={faqs.trigger} />}
                triggerWhenOpen={<CollapsibleOpen text={faqs.trigger} />}
                >
                    <p className="faq-resposta">{faqs.resposta}</p>
                </Collapsible>
                
                ))} 

            </section>


        </body>
    )
}