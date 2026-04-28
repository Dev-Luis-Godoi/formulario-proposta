# Transporte+ Proposta

Sistema front-end para criação de propostas comerciais da Transporte+.  
O projeto permite preencher dados do lead, configurar desafios e soluções, selecionar custos mensais e de implantação, calcular automaticamente os valores da proposta e gerar um PDF comercial personalizado.

## Visão geral

O **Transporte+ Proposta** foi desenvolvido para facilitar e padronizar a criação de propostas comerciais, reduzindo trabalho manual e garantindo que as informações comerciais sejam apresentadas de forma clara, organizada e visualmente alinhada à identidade da empresa.

A aplicação funciona de forma totalmente front-end, sem necessidade de backend ou integração com API externa.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- @react-pdf/renderer
- Lucide React

## Funcionalidades

- Cadastro de dados da empresa/lead
- Cadastro do solicitante
- Validação e preenchimento de CNPJ
- Seleção da validade da proposta
- Cadastro, remoção e edição de desafios
- Cadastro, remoção e edição de soluções
- Configuração de custos mensais
- Configuração de custos de implantação
- Cálculo automático dos valores da proposta
- Geração de proposta comercial em PDF
- Layout responsivo para mobile, tablet e desktop
- Nome do arquivo PDF gerado com base na razão social da empresa

## Estrutura do projeto

```txt
src/
  App.css
  App.tsx
  main.tsx
  index.css

  assets/
    Imagens, logos, fontes e ícones utilizados no projeto

  components/
    Componentes reutilizáveis da interface

  forms/
    Componentes principais dos formulários da proposta

  pdf/
    Componentes responsáveis pela geração do PDF

  schemas/
    Schemas de validação dos dados

  services/
    Serviços e regras de negócio, como cálculo de preço

  types/
    Tipagens TypeScript utilizadas no projeto

  utils/
    Funções auxiliares, constantes e dados padrão


## Pré-requisitos

- Antes de iniciar o projeto, é necessário ter instalado:

Node.js
npm
Instalação

- Clone o repositório:   git clone <url-do-repositorio>

- Acesse a pasta do projeto: cd transportemais-proposta

- Instale as dependências: npm install


## Rodando o projeto

- Para iniciar o ambiente de desenvolvimento: npm run dev

- Após executar o comando, acesse a URL exibida no terminal.
   - Geralmente o projeto ficará disponível em:
  http://localhost:5173

- Prévia do build:  npm run preview


## Build de produção

- Para gerar a versão de produção: npm run build
- O build será gerado na pasta: /dist

## Fluxo de uso
1- Preencher os dados da empresa e do solicitante.
2- Selecionar a validade da proposta.
3- Revisar ou adicionar desafios identificados no processo do cliente.
4- Revisar ou adicionar soluções propostas pela Transporte+.
5- Configurar os custos mensais.
6- Configurar os custos de implantação.
7- Conferir o resumo dos valores.
8- Gerar e baixar a proposta comercial em PDF.

## Observações técnicas
- O projeto é totalmente front-end.
- Não possui backend.
- Não utiliza banco de dados.
- Não depende de variáveis de ambiente.
- A geração do PDF é feita diretamente no navegador com @react-pdf/renderer.
- Os valores da proposta são calculados localmente através dos serviços internos do projeto.
- Os dados padrão de desafios e soluções ficam centralizados em utils.
- As regras de cálculo ficam centralizadas em services.
- As tipagens principais ficam centralizadas em types.


## Script disponíveis

- Iniciar ambiente de desenvolvimento: npm run dev

- Gerar buil de produção: npm run build

- Visualizar build localmente: npm run preview


## Padrões do projeto

O projeto segue os seguintes padrões:

- Componentização com React
- Tipagem com TypeScript
- Estilização com Tailwind CSS
- Separação entre componentes de formulário, componentes PDF, tipos, serviços e utilitários
- Regras de cálculo centralizadas em services
- Dados padrão centralizados em utils
- Componentes de PDF separados da interface principal
- Estrutura organizada para facilitar manutenção e evolução do projeto

## Autor

- Projeto desenvolvido para uso interno da Transporte+.
```
