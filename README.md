
# Conversor de Moedas 💱

Bem-vindo ao projeto de **Conversor de Moedas**! Este é um aplicativo moderno e estilizado para conversão de moedas, desenvolvido com **React**, **TypeScript** e **Vite**. O projeto utiliza APIs para obter taxas de câmbio e apresenta uma interface futurista com animações e um fundo dinâmico.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de construção e desenvolvimento rápido.
- **Styled-Components**: Biblioteca para estilização de componentes.
- **React-Select**: Biblioteca para seleção de opções.

## 🛠️ Funcionalidades

- **Conversão de Moedas**: Converte valores entre diferentes moedas utilizando taxas de câmbio atualizadas.
- **Seleção de Moedas**: Escolha facilmente a moeda de origem e destino.
- **Design Futurista**: Interface estilizada com animações e efeitos visuais modernos.
- **Carregamento Dinâmico**: Tela de carregamento estilizada enquanto os dados estão sendo buscados.

## 🔧 Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/username/repository-name.git
   ```

   Substitua `username` e `repository-name` com seu nome de usuário e nome do repositório no GitHub.

2. **Navegue para o Diretório do Projeto**

   ```bash
   cd repository-name
   ```

3. **Instale as Dependências**

   ```bash
   npm install
   ```

   Ou, se estiver usando `yarn`:

   ```bash
   yarn install
   ```

4. **Inicie o Servidor de Desenvolvimento**

   ```bash
   npm run dev
   ```

   Ou, se estiver usando `yarn`:

   ```bash
   yarn dev
   ```

   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## 🖼️ Screenshots

![Tela Principal](src/assets/imgs/screenshot.png)

## 🔄 Atualização das Taxas de Câmbio

As taxas de câmbio são obtidas através da API [ExchangeRate-API](https://www.exchangerate-api.com/). As informações são atualizadas automaticamente ao carregar a página.

## 📜 Estrutura do Projeto

- **`src/`**: Contém todos os arquivos do projeto.
  - **`components/`**: Componentes reutilizáveis, como `CurrencySelect` e `Loading`.
  - **`hooks/`**: Hooks personalizados, como `useCurrencyRates` e `useConversion`.
  - **`pages/`**: Páginas principais da aplicação, incluindo `Home.tsx`.
  - **`services/`**: Serviços para interações com APIs.
  - **`styles/`**: Estilos globais e específicos, incluindo arquivos CSS e imagens.
  - **`utils/`**: Funções utilitárias, como `formatCurrency.ts`.

## ✨ Como Contribuir

1. **Faça um Fork** do repositório.
2. **Crie uma Branch** para suas modificações:

   ```bash
   git checkout -b minha-feature
   ```

3. **Faça Commit** das suas alterações:

   ```bash
   git add .
   git commit -m "Adiciona nova funcionalidade"
   ```

4. **Envie as Alterações** para o GitHub:

   ```bash
   git push origin minha-feature
   ```

5. **Abra um Pull Request** no GitHub para revisão.

## 👤 Autor

- **Thaleson Silva** - [LinkedIn](https://www.linkedin.com/in/thaleson-silva) | [GitHub](https://github.com/thalesonsilva)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Sinta-se à vontade para entrar em contato se tiver dúvidas ou sugestões. Agradecemos pela sua visita e esperamos que aproveite o projeto!

```

