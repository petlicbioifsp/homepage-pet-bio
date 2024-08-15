"use client";

import { useState, useEffect } from "react";
import {
  InscricoesProps,
  IInformationProps,
  IRequisitosProps,
} from "@/types/TextTypes";

function useFetchProcessos() {
  const FETCH_URL: string = "./data/processos.json";
  const [inscricao, setInscricao] = useState<InscricoesProps | null>(null);
  const [requisitos, setRequisitos] = useState<IRequisitosProps | null>(null);
  const [informacoes, setInformacoes] = useState<IInformationProps | null>(null);

  useEffect(() => {
    const FetchProcessos = async () => {
      try {
        const response = await fetch(FETCH_URL);
        if (!response.ok)
          throw new Error(
            `Falha na requisição ao servidor. Status: ${response.status}`
          );
        const data = await response.json();
        const {
          inscricoesContent,
          requisitosContent,
          processoSeletivoContent,
        } = data;

        setInscricao(inscricoesContent);
        setRequisitos(requisitosContent);
        setInformacoes(processoSeletivoContent);
      } catch (e) {
        console.log("Ocorreu ");
      }
    };
    FetchProcessos();
  }, []);

  return { inscricao, requisitos, informacoes };
}

export default useFetchProcessos;