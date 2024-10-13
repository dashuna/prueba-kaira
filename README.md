# Prueba Kaira

Este proyecto es una prueba técnica para Kaira que incluye la automatización de un formulario utilizando Cypress. 
El formulario debe ser completado automáticamente con diferentes datos proporcionados por un fixture.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejecutar Pruebas](#ejecutar-pruebas)

## Requisitos

Asegúrate de tener las siguientes herramientas instaladas antes de comenzar:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [Cypress](https://www.cypress.io/) (última versión)

## Instalación

1. Clona este repositorio en tu máquina local:
   git clone https://github.com/dashuna/prueba-kaira.git
2. Accede al directorio del proyecto:
   cd prueba-kaira
3. Instala las dependencias del proyecto:
   npm install

## Estructura del Proyecto
- cypress/e2e: Contiene los archivos de prueba automatizados.
- cypress/fixtures: Contiene los archivos JSON que se utilizan como fixture para rellenar el formulario con diferentes datos.
- cypress/pages: Contiene los métodos para interactuar con la página del formulario.
- cypress.config.js: Configuración principal de Cypress.
- package.json: Archivo de configuración del proyecto y dependencias.

## Ejecutar Pruebas
Para ejecutar las pruebas de Cypress, usa el siguiente comando:
  npx cypress open



