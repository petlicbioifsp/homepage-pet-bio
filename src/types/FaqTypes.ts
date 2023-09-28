export interface FaqInterface {
    id: string;
    trigger: string;
    resposta: string;
  }
  
export interface FaqData {
    faqs: FaqInterface[];
  }
  