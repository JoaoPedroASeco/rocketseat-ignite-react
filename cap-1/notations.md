 1 - Aula: 
  - Inicializando um projeto
    - Inicializar repositorio no github
      - "git init"
    - Inicializar o package.json
      - "yarn init -y"
    - Inicializando o projeto com react
      - "yarn add react"
      - "yarn add react-dom"

 2 - Aula: 
  - Babel: 
    - Serve para converter o codigo para que todos os browsers consigam entender 
    - Instalação:
      - "yarn add @babel/core @babel/cli @babel/preset-env -D"
  - Funcionalidade 
    - "nullable coalesce operator" 
      - verifica se a propriedade de um objeto existe ou não
  - Dependencias
    - @babel/preset-env
    - @babel/preset-react
  - Criar um arquivo chamado nanel.config.js com o seguinte conteudo:
  - 
      module.exports = {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react"
        ]
      }

  - Para executar o projeoto é preciso executar o comando "yarn babel src/index.jsx --out-file dist/bundle.js"

 2 - Aula:
  - instalar:
    - webpack webpack-cli webpack-dev-server -D
    - babel-loader