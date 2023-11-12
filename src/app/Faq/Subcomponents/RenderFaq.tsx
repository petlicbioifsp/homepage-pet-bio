import React from "react";
import Collapsible from "react-collapsible";
import { IFaq } from "../../../types/FaqTypes";
import CollapsibleOpen from "../../../hooks/collapsible/useCollapsibleOpen";
import CollapsibleTrigger from "../../../hooks/collapsible/useCollapsibleTrigger";

export const renderFaq = (faqItems: IFaq[]): JSX.Element[] => {
  const renderFaqItem = (faq: IFaq): JSX.Element => (
    <Collapsible
      key={faq.id}
      trigger={<CollapsibleTrigger text={faq.trigger} page="FAQ" />}
      triggerWhenOpen={<CollapsibleOpen text={faq.trigger} page="FAQ" />}
    >
      <p className="faq-resposta">{faq.resposta}</p>
    </Collapsible>
  );

  const faqElements = faqItems.map(renderFaqItem);

  return faqElements;
};
