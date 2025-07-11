import { useEffect, useState } from "react";

// Tipos (sem alteração)
type Barbershop = {
  id: number;
  name: string;
  address: string;
};

type ResponseSuccess = {
  barbershops: Barbershop[];
};

type ResponseError = {
  errors: string[];
  tokenIsExpired?: boolean;
};

// O tipo da resposta da API pode ser de sucesso OU de erro.
type ApiResponse = ResponseSuccess | ResponseError;

export default function useFetchShortBarbershops() {
  const [barbershops, setBarbershops] = useState<Barbershop[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShortBarbershops = async () => {
      try {
        const res = await fetch("/api/barbershops");

        if (!res.ok && res.status !== 200) {
          setError(
            `Parece que o servidor está fora do ar, mas não se preocupe, já estamos resolvendo!`
          );
          setBarbershops([]);
          return;
        }

        const data: ApiResponse = await res.json();

        if ("barbershops" in data && Array.isArray(data.barbershops)) {
          setBarbershops(data.barbershops);
          setError(null);
        } else if ("errors" in data && data.errors?.length > 0) {
          setError(data.errors.join("\n"));
          setBarbershops([]);
        } else {
          setError(
            "Parece que você encontrou um bug! Por favor, informe ao suporte."
          );
          setBarbershops([]);
        }
      } catch (err) {
        console.error("Erro de rede ou ao processar o JSON:", err);
        setError(
          "Você encontrou um erro inesperado. Por favor, informe ao suporte."
        );
        setBarbershops([]);
      }
    };

    fetchShortBarbershops();
  }, []);

  return { barbershops, error };
}
