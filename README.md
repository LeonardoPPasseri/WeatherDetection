# WeatherDetection

Uma aplicação web desenvolvida em **React** e **Vite** que permite aos usuários verificar as condições climáticas atuais de qualquer cidade. O projeto consome a API do Open-Meteo para fornecer dados precisos e atualizados.

## Funcionalidades

* **Busca por Cidade:** O usuário pode digitar o nome de qualquer cidade para consultar o clima.
* **Dados em Tempo Real:** Exibe a temperatura atual (°C), umidade relativa do ar (%) e velocidade do vento (km/h).
* **Ícones Dinâmicos:** A interface altera o ícone do clima automaticamente (Sol, Nuvens, Chuva, Neve, Neblina, etc.) baseando-se no código do tempo retornado pela API.
* **Geocodificação Automática:** Converte o nome da cidade em latitude e longitude para realizar a consulta climática.
* **Interface Responsiva:** Estilização limpa com imagem de fundo e layout centralizado.

## Tecnologias Utilizadas

* **React** (v19)
* **Vite** (Build tool)
* **CSS3** (Estilização modular)
* **Open-Meteo API** (Dados climáticos e Geocoding)

## Como rodar o projeto

Siga os passos abaixo para baixar e executar a aplicação em sua máquina local.

### Pré-requisitos

Você precisa ter o **Node.js** e o **npm** instalados.

### Passo a passo

1. **Clone o repositório:**
```bash
git clone https://github.com/LeonardoPPasseri/WeatherDetection.git

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


4. **Acesse a aplicação:**
Após rodar o comando acima, o terminal mostrará um link (geralmente `http://localhost:5173`). Clique nele ou cole no seu navegador para usar o app.

## Scripts Disponíveis

* `npm run dev`: Inicia o servidor local de desenvolvimento.
* `npm run build`: Cria a versão otimizada para produção.
* `npm run lint`: Executa o ESLint para verificar a qualidade do código.
* `npm run preview`: Visualiza a versão de produção localmente.
