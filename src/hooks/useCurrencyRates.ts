// src/hooks/useCurrencyRates.ts

import { useState, useEffect } from 'react';
import { getRates } from '../services/currencyService';

/**
 * Hook personalizado para obter taxas de câmbio e gerenciar o estado de carregamento e erros.
 * 
 * Este hook realiza uma chamada assíncrona para buscar as taxas de câmbio e mantém o estado das taxas de câmbio,
 * o estado de carregamento e possíveis erros. Ele retorna um objeto contendo as taxas de câmbio, o estado de
 * carregamento e uma mensagem de erro, se houver.
 * 
 * @returns {Object} Um objeto contendo:
 * - `rates`: Um objeto contendo as taxas de câmbio, onde as chaves são os códigos das moedas e os valores são as taxas.
 * - `loading`: Um booleano indicando se os dados estão sendo carregados.
 * - `error`: Uma string com a mensagem de erro, se ocorrer um erro durante a busca das taxas, ou `null` se não houver erro.
 */
const useCurrencyRates = () => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await getRates();
        setRates(data.conversion_rates);
        setLoading(false);
      } catch (error) {
        setError('Error fetching rates');
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return { rates, loading, error };
};

export default useCurrencyRates;
