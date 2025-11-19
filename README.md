 Simulador FNO – React

Este projeto é um simulador interativo do FNO, desenvolvido em React, com foco em usabilidade, simplicidade e geração de relatórios.
A aplicação é composta por três telas principais — Dados Básicos, Seu Projeto e Resultado — todas integradas por uma barra lateral de progresso, facilitando a navegação.

Tecnologias Utilizadas

React.js – base do projeto

JavaScript / JSX – lógica e estrutura da aplicação

Tailwind CSS (via CDN) – estilização rápida e responsiva

CSS (via classes do Tailwind) – personalização visual

Bootstrap – utilizado para criação e formatação de alguns campos e elementos

html2pdf.js (via CDN) – geração de relatórios em PDF

Estrutura do Projeto
SIMULADOR-FNO
│
├── public
│
└── src
    ├── components
    │   ├── BasicForm.jsx
    │   ├── ProgressBar.jsx
    │   ├── ProjectForm.jsx
    │   ├── ResultScreen.jsx
    │   └── WaveBackground.jsx
    │
    ├── App.jsx
    ├── index.css
    └── index.js

Como executar o projeto

Extraia o conteúdo do repositório

Instale as dependências:

npm install

Inicie o projeto:

npm start


A aplicação estará disponível em:
 http://localhost:3000

 Observações importantes

O Tailwind CSS é carregado via CDN no public/index.html, dispensando configuração de PostCSS.

A biblioteca html2pdf.js também é carregada via CDN no public/index.html e utilizada em App.jsx através de window.html2pdf.
