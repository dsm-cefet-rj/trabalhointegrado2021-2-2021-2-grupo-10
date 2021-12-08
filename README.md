# NegócioFechado - Grupo 10

### Problema e solução

O Brasil vem entrando numa crise de desemprego crescente nos últimos anos, que por consequência aumentou muito o número de trabalhadores informais que estão sujeitos à qualidade de trabalho arbitrárias e muitas vezes abusivas.

Pra mediar essa relação, pensamos num projeto que tenta fazer a interface de um contratante com o prestador de serviço, oferecendo para ambos
transparência no acordo informal, acesso a mais informações, recomendações e segurança para que tanto o prestador quanto o 
contratante tenham uma experiência satisfatória e mais assertiva no acordo de serviço.

Assim, o foco de monetização estaria centrado na escala, sistema do NegócioFechado aposta no efeito de rede de prestadores de serviço de qualidade x contratantes de pequenos-médios serviços cotidianos.

(Modelo de monetização em si ainda está por definir.)

## Modelagem

### Entidades do sistema

A princípio teríamos nove entidades no nosso sistema:

- Contratante;
- Prestador de serviço;
- Pedido; 
- Proposta/Conversa;
- Mensagens;
- Tipo de Serviço;
- Comentários/Avaliações;
- Local;
- Pagamento.

### Casos de uso

Levantamos 22 principais casos de uso:

- Manutenção de contratados (4 casos de uso);
- Cadastro de contratante/prestador (2 casos de uso);
- Aceitar/Rejeitar chat/contato/serviço (1 casos de uso);
- Editar perfil contratante (1 casos de uso);
- Editar perfil prestador (1 casos de uso);
- Criar, sair, deletar chat (3 casos de uso);
- Filtro de busca (tipo, local, avaliação) (1 caso de uso);
- Comentário sobre contratante/prestador (1 caso de uso);
- Avaliar contratante/prestador (1 caso de uso);
- Favoritar prestador (1 caso de uso);
- Deletar conta (1 caso de uso);
- Manutenção do cartão de crédito (4 casos de uso);
- Pagamento (1 caso de uso).

### Fluxo principal de uso

Primeiro o contratante se cadastra na plataforma, depois eles aplica os filtros do tipo de serviço, dia de disponibilidade características necessárias no prestador de serviço, nosso aplicativo mostrar a quantidade de resultados possíveis. Posteriormente, os prestadores já cadastrados no aplicativo recebem uma notificação sobre as características do serviço e do contratante, com a opção de aceitar ou rejeitar o serviço. No caso de serviço aceito será criado um chat de texto para que o contratante e o prestador possam se comunicar na plataforma. Após a finalização do serviço ou interrupção por outro motivo, terão a opção de finalizar contato na aba do chat, então prestadores e contratantes poderão deixar uma avaliação e/ou comentário sobre os mesmos.

## Boilerplate usado

Usando um [boilerplate de projetos de Node.js e React](https://github.com/crsandeep/simple-react-full-stack) como base do projeto e algumas regras de linter do ESLint personalizadas.

### Desenvolvimento local

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

# No terminal

```bash
# Clone the repository
git clone https://github.com/dsm-cefet-rj/trabalhointegrado2021-2-2021-2-grupo-10

# Go inside the directory
cd trabalhointegrado2021-2-2021-2-grupo-10

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run unittests
npm run test

# Run linter
npm run lint
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. 

Inside src, there is client and server directory. 

All the frontend code (react, css, js and any other assets) will be in client directory. 

Backend Node.js/Express code will be in the server directory.

### Linter

[I am using Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) which is used by many JavaScript developers worldwide. Since we are going to write both client (browser) and server side (Node.js) code, I am setting the **env** to browser and node. Optionally, we can override the Airbnb's configurations to suit our needs. I have turned off [**no-console**](https://eslint.org/docs/rules/no-console), [**comma-dangle**](https://eslint.org/docs/rules/comma-dangle) and [**react/jsx-filename-extension**](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) rules.

### Webpack

[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

[webpack.config.js](https://webpack.js.org/configuration/) file is used to describe the configurations required for webpack. Below is the webpack.config.js file which I am using.

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: ["babel-polyfill", "./src/client/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ]
};
```

1.  **entry:** entry: ./src/client/index.js is where the application starts executing and webpack starts bundling.
    Note: babel-polyfill is added to support async/await. Read more [here](https://babeljs.io/docs/en/babel-polyfill#usage-in-node-browserify-webpack).
2.  **output path and filename:** the target directory and the filename for the bundled output
3.  **module loaders:** Module loaders are transformations that are applied on the source code of a module. We pass all the js file through [babel-loader](https://github.com/babel/babel-loader) to transform JSX to Javascript. CSS files are passed through [css-loaders](https://github.com/webpack-contrib/css-loader) and [style-loaders](https://github.com/webpack-contrib/style-loader) to load and bundle CSS files. Fonts and images are loaded through url-loader.
4.  **Dev Server:** Configurations for the webpack-dev-server which will be described in coming section.
5.  **plugins:** [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) is a webpack plugin to remove the build folder(s) before building. [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) simplifies creation of HTML files to serve your webpack bundles. It loads the template (public/index.html) and injects the output bundle.

### Webpack dev server

[Webpack dev server](https://webpack.js.org/configuration/dev-server/) is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

The devServer section of webpack.config.js contains the configuration required to run webpack-dev-server which is given below.

```javascript
devServer: {
    port: 3000,
    open: true,
    proxy: {
        "/api": "http://localhost:8080"
    }
}
```

[**Port**](https://webpack.js.org/configuration/dev-server/#devserver-port) specifies the Webpack dev server to listen on this particular port (3000 in this case). When [**open**](https://webpack.js.org/configuration/dev-server/#devserver-open) is set to true, it will automatically open the home page on startup. [Proxying](https://webpack.js.org/configuration/dev-server/#devserver-proxy) URLs can be useful when we have a separate API backend development server and we want to send API requests on the same domain. In our case, we have a Node.js/Express backend where we want to send the API requests to.

### Nodemon

Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

nodemon.json file is used to describe the configurations for Nodemon. Below is the nodemon.json file which I am using.

```javascript
{
  "watch": ["src/server/"]
}
```

Here, we tell nodemon to watch the files in the directory src/server where out server side code resides. Nodemon will restart the node server whenever a file under src/server directory is modified.

### Express

Express is a web application framework for Node.js. It is used to build our backend API's.

src/server/index.js is the entry point to the server application. Below is the src/server/index.js file

```javascript
const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(8080, () => console.log("Listening on port 8080!"));
```

This starts a server and listens on port 8080 for connections. The app responds with `{username: <username>}` for requests to the URL (/api/getUsername). It is also configured to serve the static files from **dist** directory.

### Concurrently

[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.

```javascript
"client": "webpack-dev-server --mode development --devtool inline-source-map --hot",
"server": "nodemon src/server/index.js",
"dev": "concurrently \"npm run server\" \"npm run client\""
```

### VSCode + ESLint + Prettier

[VSCode](https://code.visualstudio.com/) is a lightweight but powerful source code editor. [ESLint](https://eslint.org/) takes care of the code-quality. [Prettier](https://prettier.io/) takes care of all the formatting.

#### Installation guide

On settings.json add:

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript",
        "typescript"
    ],
    "editor.formatOnSave": true,
    "runOnSave.statusMessageTimeout": 3000,
    "runOnSave.commands": [
        {
            "match": "\\.js$",
            "isAsync": true,
            "command": "npm run lint:fix",
            "runIn": "terminal"
        }
    ]
}
```