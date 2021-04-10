// Importando dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// Iniciando o express
const server = express();
server
  // Utilizar body do req
  .use(express.urlencoded({ extended: true }))
  // Utilizando os aquivos estáticos
  .use(express.static('public'))
  // Configura template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')
  // Criar uma rota
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage);

// Ligar o servidor
server.listen(5500);
