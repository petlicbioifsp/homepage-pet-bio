"use client"

import { useState, useEffect } from "react";
import { IFetchPlatforms } from "@/types/FetchTypes";
import { IPlatform } from "@/types/DigitalPlataforms";

export default function useFetchPlataformas({ render }: IFetchPlatforms) {
    const FETCH_URL: string = "./data/plataformas.json";
    const [plataformas, setPlataformas] = useState<IPlatform[]>([]);

    useEffect(() => {
        const fetchDataPlataforms = async () => {
            try {
                const response = await fetch(FETCH_URL);
                if (!response.ok)
                    throw new Error(`Falha na requisição ao servidor. Status: ${response.status}`);
                const data = await response.json();
                const { plataformas } = data;
                setPlataformas(plataformas);
            } catch (error) {
                console.error(`Erro na busca das plataformas digitais: ${error}`);
            }
        };
        fetchDataPlataforms();
    }, []);

    return render(plataformas);
}
