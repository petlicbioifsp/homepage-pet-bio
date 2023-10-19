import React from "react";
import Collapsible from "react-collapsible";
import { IFaq } from "../../../types/FaqTypes";
import CollapsibleOpen from "../../../hooks/collapsible/useCollapsibleOpen";
import CollapsibleTrigger from "../../../hooks/collapsible/useCollapsibleTrigger";

export const renderFaq = (arrFaq: IFaq[] ): JSX.Element[] => {
    const renderFaqItens = (faqs: IFaq): JSX.Element => (
      <Collapsible
        key={faqs.id}
        trigger={<CollapsibleTrigger text={faqs.trigger} page="FAQ" />}
        triggerWhenOpen={<CollapsibleOpen text={faqs.trigger} page="FAQ" />}
      >
        <p className="faq-resposta">{faqs.resposta}</p>
      </Collapsible>
    );
  
    const faqItems = arrFaq.map(renderFaqItens);
  
    return faqItems;
  };