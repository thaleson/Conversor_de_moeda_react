// src/styles/global.ts

import { createGlobalStyle } from 'styled-components';

/**
 * Estilos globais da aplicação.
 * 
 * Este componente aplica estilos globais para toda a aplicação, incluindo a importação de fontes externas e a definição
 * de estilos padrão para elementos HTML. Isso garante uma aparência consistente e moderna em toda a aplicação.
 * 
 * @component
 * @returns {StyledComponent} Um componente estilizado que aplica estilos globais.
 */
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  /* Reseta margens e preenchimentos padrão e define o box-sizing para border-box */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Define a fonte padrão e a cor de fundo para o corpo da página */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
  }

  /* Define a cor dos títulos h1 e h2 */
  h1, h2 {
    color: #333;
  }

  /* Define o padding e o tamanho da fonte para campos de entrada */
  input {
    padding: 10px;
    font-size: 16px;
  }
`;
