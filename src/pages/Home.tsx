// src/pages/Home.tsx

import React, { useState } from 'react';
import CurrencySelect from '../components/CurrencySelect';
import Loading from '../components/Loading';
import { Container, Background, Header, Input, Result } from './styles';
import { formatCurrency } from '../utils/format';
import useCurrencyRates from '../hooks/useCurrencyRates';
import useConversion from '../hooks/useConversion';
import { SingleValue } from 'react-select';

/**
 * Interface para as opções de seleção de moeda.
 */
interface OptionType {
  value: string;
  label: string;
}

/**
 * Componente principal da página inicial do conversor de moedas.
 * 
 * Este componente exibe um conversor de moedas com seleção de moedas de origem e destino,
 * entrada para valor e o valor convertido. Ele usa hooks personalizados para obter taxas de câmbio
 * e calcular a conversão. Mostra um indicador de carregamento enquanto as taxas de câmbio estão sendo
 * carregadas e exibe uma mensagem de erro se ocorrer um problema durante a obtenção das taxas.
 * 
 * @returns {JSX.Element} O componente da página inicial do conversor de moedas.
 */
const Home: React.FC = () => {
  // Hook personalizado para obter taxas de câmbio
  const { rates, loading, error } = useCurrencyRates();
  
  // Estados para armazenar as seleções do usuário e o valor a ser convertido
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [amount, setAmount] = useState<number>(1);

  // Hook personalizado para calcular o valor convertido
  const convertedAmount = useConversion(rates, fromCurrency, toCurrency, amount);

  // Mapeia as taxas de câmbio para opções de seleção
  const currencyOptions = Object.keys(rates).map(key => ({
    value: key,
    label: key,
  }));

  // Exibe o indicador de carregamento ou a mensagem de erro se necessário
  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <Background>
      <Container>
        <Header>Conversor de moeda</Header>
        <CurrencySelect
          options={currencyOptions}
          onChange={(option: SingleValue<OptionType>) => {
            if (option) {
              setFromCurrency(option.value);
            }
          }}
        />
        <CurrencySelect
          options={currencyOptions}
          onChange={(option: SingleValue<OptionType>) => {
            if (option) {
              setToCurrency(option.value);
            }
          }}
        />
        <Input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <Result>
          Valor convertido: {convertedAmount !== null ? formatCurrency(convertedAmount, toCurrency) : 'N/A'}
        </Result>
      </Container>
    </Background>
  );
};

export default Home;
