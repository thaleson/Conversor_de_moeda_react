// src/hooks/useConversion.ts

import { useState, useEffect } from 'react';

/**
 * Hook personalizado para calcular o valor convertido com base nas taxas de câmbio.
 * 
 * Este hook utiliza as taxas de câmbio fornecidas, a moeda de origem, a moeda de destino e o valor a ser convertido
 * para calcular o valor convertido. O valor convertido é atualizado sempre que as dependências mudam, incluindo o valor
 * a ser convertido, a moeda de origem, a moeda de destino e as taxas de câmbio.
 * 
 * @param {Object} rates - Um objeto contendo as taxas de câmbio, onde as chaves são os códigos das moedas e os valores são as taxas.
 * @param {string} fromCurrency - O código da moeda de origem (por exemplo, "USD").
 * @param {string} toCurrency - O código da moeda de destino (por exemplo, "EUR").
 * @param {number} amount - O valor a ser convertido.
 * @returns {number | null} O valor convertido ou `null` se não puder ser calculado.
 */
const useConversion = (
  rates: { [key: string]: number }, 
  fromCurrency: string, 
  toCurrency: string, 
  amount: number
): number | null => {
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  useEffect(() => {
    if (rates && rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount(amount * rate);
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  return convertedAmount;
};

export default useConversion;
