"use client"

import { useState, useEffect } from "react";
import { IConstText } from "@/types/ConstantTypes";

function useFetchHome() {
  const FETCH_URL: string = "./data/home.json";

  const [AboutPET, setAboutPET] = useState<IConstText>();
  const [Purpose, setPurpose] = useState<IConstText>();

  useEffect(() => {
    const fetchDataHome = async () => {
      try {
        const response = await fetch(FETCH_URL);
        if (!response.ok) {
          throw new Error(`Falha na requisição ao servidor. Status: ${response.status}`);
        }
        const data = await response.json();
        const { AboutPET, Purpose } = data;
        setAboutPET(AboutPET);
        setPurpose(Purpose);
      } catch (e) {
        console.log(`Ocorreu um erro ao obter os dados de home: ${e}`);
      }
    };
    fetchDataHome();
  }, []);

  return { AboutPET, Purpose };
}

export default useFetchHome;
