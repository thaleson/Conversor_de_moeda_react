// src/styles/loading.ts

import styled, { keyframes } from 'styled-components';

// Animação para o spinner de carregamento
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

/**
 * Contêiner para o componente de carregamento.
 * 
 * Este contêiner é um elemento flexível que centraliza o conteúdo tanto vertical quanto horizontalmente na tela.
 * Ele tem um fundo escuro translúcido e um texto de cor clara para garantir que o spinner e a mensagem de carregamento
 * sejam visíveis. É configurado para ocupar toda a altura da tela (100vh).
 * 
 * @component
 * @returns {StyledComponent} Um componente estilizado para o contêiner do carregamento.
 */
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: #e0e0e0;
`;

/**
 * Spinner de carregamento.
 * 
 * Este spinner é um círculo animado que gira continuamente para indicar que um processo está em andamento.
 * O spinner tem um efeito de sombra para parecer mais futurista e moderno. Ele possui um contorno claro e uma borda
 * superior em cor ciano que gira. A animação é definida com uma rotação contínua.
 * 
 * @component
 * @returns {StyledComponent} Um componente estilizado para o spinner de carregamento.
 */
export const Loader = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border-top: 8px solid #00ffff;
  width: 80px;
  height: 80px;
  animation: ${spin} 1.5s linear infinite;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
`;
