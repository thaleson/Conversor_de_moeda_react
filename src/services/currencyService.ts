// src/services/currencyService.ts

import axios from 'axios';

// URL da API para obter taxas de câmbio
const API_URL = 'https://v6.exchangerate-api.com/v6/34256fbaaf166b0662daeb64/latest/USD';

/**
 * Obtém as taxas de câmbio mais recentes da API de câmbio.
 * 
 * Esta função faz uma solicitação GET para a API de taxas de câmbio e retorna os dados recebidos. Se ocorrer um erro
 * durante a solicitação, o erro é registrado e lançado novamente para ser tratado onde a função é chamada.
 * 
 * @async
 * @returns {Promise<any>} Uma Promise que resolve com os dados da resposta da API. Os dados geralmente contêm informações
 * sobre as taxas de câmbio, incluindo as taxas para várias moedas em relação ao USD.
 * @throws {Error} Se ocorrer um erro durante a solicitação, o erro é registrado e lançado novamente.
 */
export const getRates = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching exchange rates', error);
    throw error;
  }
};
