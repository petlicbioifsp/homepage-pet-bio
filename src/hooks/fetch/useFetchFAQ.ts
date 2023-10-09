import { useState, useEffect } from 'react';
import { IFetchFaq } from '../../types/FetchTypes';
import { IFaq, FaqData } from '../../types/FaqTypes';


export default function  FetchFaq ({ render }: IFetchFaq) {
  const [arrFaq, setFaq] = useState<IFaq[]>([]);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await fetch('./data/faq.json');
        const data:FaqData = await response.json();
        setFaq(data.faqs);
      } catch (error) {
        console.error('Ocorreu um erro ao obter o FAQ:', error);
      }
    };

    fetchFaq();
  }, []);

  return render(arrFaq);
};

