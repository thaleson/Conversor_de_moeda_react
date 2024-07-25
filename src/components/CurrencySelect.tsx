// src/components/CurrencySelect.tsx

import React from 'react';
import Select, { SingleValue } from 'react-select';

/**
 * Interface que define o formato das opções para o seletor de moeda.
 */
interface OptionType {
  value: string;
  label: string;
}

/**
 * Propriedades do componente CurrencySelect.
 * 
 * @interface CurrencySelectProps
 * @property {OptionType[]} options - Um array de opções para o seletor de moeda. Cada opção deve ter um valor e um rótulo.
 * @property {(selectedOption: SingleValue<OptionType>) => void} onChange - Função chamada quando uma opção é selecionada. Recebe o valor selecionado.
 */
interface CurrencySelectProps {
  options: OptionType[];
  onChange: (selectedOption: SingleValue<OptionType>) => void;
}

/**
 * Componente de seleção de moeda.
 * 
 * Este componente usa o `react-select` para fornecer uma interface de seleção de moeda. Ele aceita um array de opções
 * e uma função de retorno de chamada para lidar com a mudança de seleção. Quando uma nova opção é selecionada,
 * a função `onChange` é chamada com a opção selecionada.
 * 
 * @param {CurrencySelectProps} props - Propriedades passadas para o componente.
 * @returns {JSX.Element} O componente de seleção de moeda.
 */
const CurrencySelect: React.FC<CurrencySelectProps> = ({ options, onChange }) => {
  return <Select options={options} onChange={onChange} />;
};

export default CurrencySelect;
