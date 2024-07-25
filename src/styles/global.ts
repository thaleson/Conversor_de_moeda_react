import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
