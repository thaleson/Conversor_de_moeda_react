// src/pages/styles.ts

import styled from 'styled-components';


/**
 * Contêiner de fundo da página.
 * 
 * Este contêiner é utilizado como fundo para a página principal. Ele define uma imagem de fundo que cobre toda a área
 * da tela, com ajuste automático ao tamanho da tela. A imagem é fixada no centro e a opacidade da imagem é reduzida
 * para melhorar o contraste com o conteúdo em primeiro plano.
 * 
 * @component
 * @returns {StyledComponent} Um componente estilizado para o fundo da página.
 */
export const Background = styled.div`
   
  background: url('/src/assets/imgs/background.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(0.9); /* Diminui o brilho da imagem de fundo para melhor contraste */
`;

/**
 * Contêiner principal para o conteúdo da página.
 * 
 * Este contêiner centraliza o conteúdo da página e aplica um fundo semi-transparente com um efeito de desfoque.
 * Ele é estilizado para se destacar sobre o fundo da página e tem um sombreamento ciano para criar um efeito futurista.
 * 
 * @component
 * @returns {StyledComponent} Um componente estilizado para o contêiner de conteúdo da página.
 */
export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 25px rgba(0, 255, 255, 0.5);
  text-align: center;
  width: 800px;
  backdrop-filter: blur(10px); /* Adiciona um efeito de desfoque no fundo do container */
`;

/**
 * Cabeçalho da página.
 * 
 * Este estilo é aplicado ao título da página. Ele usa uma cor ciana vibrante com um efeito de sombra de texto para criar
 * um visual futurista. O tamanho da fonte é grande para garantir que o título se destaque.
 * 
 * @component
 * @returns {StyledComponent} Um componente estilizado para o cabeçalho da página.
 */
export const Header = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
`;

/**
 * Estilo para o campo de entrada de dados.
 * 
 * Este estilo é aplicado ao campo de entrada de dados, com uma borda ciana que muda para uma cor magenta quando o campo
 * está em foco. Inclui também um efeito de transição suave para a cor da borda e a sombra do campo.
 * 
 * @component
 * @returns {StyledComponent} Um componente estilizado para o campo de entrada de dados.
 */
export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 15px;
  margin: 20px 0;
  border: 2px solid #00ffff;
  border-radius: 5px;
  font-size: 1.2em;
  background: transparent;
  color: #e0e0e0;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #ff00ff;
    outline: none;
    box-shadow: 0 0 10px #ff00ff;
  }
`;

/**
 * Resultado da conversão de moeda.
 * 
 * Este estilo é aplicado ao elemento que exibe o resultado da conversão de moeda. Usa uma cor clara com sombra de texto
 * magenta para destacar o resultado de forma visível e atraente.
 * 
 * @component
 * @returns {StyledComponent} Um componente estilizado para o resultado da conversão.
 */
export const Result = styled.h2`
  font-size: 1.5em;
  margin-top: 20px;
  color: #e0e0e0;
  text-shadow: 0 0 5px #ff00ff;
`;
