// src/components/Loading.tsx

import React from 'react';
import { LoaderContainer, Loader } from '../styles/loading';

/**
 * Componente de carregamento (loading).
 * 
 * Este componente exibe um indicador de carregamento (spinner) e uma mensagem de "Loading..." enquanto os dados estão
 * sendo carregados. Ele é geralmente utilizado para fornecer feedback visual ao usuário durante operações assíncronas.
 * 
 * @returns {JSX.Element} O componente de carregamento com um spinner e uma mensagem de "Loading...".
 */
const Loading: React.FC = () => {
  return (
    <LoaderContainer>
      <Loader />
      <p>Loading...</p>
    </LoaderContainer>
  );
};

export default Loading;
