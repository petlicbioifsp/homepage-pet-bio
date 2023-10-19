export interface IFaq {
    id: string;
    trigger: string;
    resposta: string;
  }
  
export interface FaqData {
    faqs: IFaq[];
  }
  