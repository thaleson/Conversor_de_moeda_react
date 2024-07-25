// src/utils/format.ts

/**
 * Formata um número para o formato de moeda, incluindo o símbolo da moeda.
 * @param amount - O valor a ser formatado.
 * @param currency - O código da moeda (ex: "USD", "EUR").
 * @returns Uma string formatada como moeda.
 */
export const formatCurrency = (amount: number, currency: string): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };
  
  /**
   * Formata um número para um formato de número padrão com separadores de milhares.
   * @param value - O número a ser formatado.
   * @returns Uma string formatada com separadores de milhares.
   */
  export const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('en-US').format(value);
  };
  
  /**
   * Converte uma string para o formato Título (capitaliza a primeira letra de cada palavra).
   * @param text - A string a ser convertida.
   * @returns A string convertida em formato Título.
   */
  export const toTitleCase = (text: string): string => {
    return text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  };
  