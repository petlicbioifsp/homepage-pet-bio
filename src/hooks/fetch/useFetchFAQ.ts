import { useState, useEffect } from "react";
import { IFetchFaq } from "../../types/FetchTypes";
import { IFaq, FaqData } from "../../types/FaqTypes";

export default function FetchFaq({ render }: IFetchFaq) {
  const [faqData, setFaqData] = useState<IFaq[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/faq.json");

        if (!response.ok) {
          throw new Error("Falha na requisição ao servidor");
        }

        const data: FaqData = await response.json();
        setFaqData(data.faqs);
      } catch (error) {
        console.error(`Erro na busca do FAQ: ${error}`);
      }
    };

    fetchData();
  }, []);

  return render(faqData);
}
