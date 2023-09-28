import { useState, useEffect } from 'react';
import { FetchFaqInterface } from '../../types/FetchTypes';
import { FaqInterface, FaqData } from '../../types/FaqTypes';


const FetchFaq = ({ render }: FetchFaqInterface) => {
  const [arrFaq, setFaq] = useState<FaqInterface[]>([]);

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

export default FetchFaq;
