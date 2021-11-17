const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Casos = require('../models/casosCovid');

const rotaCovid = express.Router();

const itemRouter = express.Router({mergeParams: true});

rotaCovid.use('/', itemRouter);

rotaCovid.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('GET - Todos casos de Covid ');
    })
    .post((req, res) => { // ajustar req.body.nome
        res.end('POST - Adicionando registro: ' + req.body.nome );
     })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT - operação não suportada'); 
    })
    .delete((req, res) => { // remover posteriormente para segurança
        res.end('Deletando todos os casos!!');
    });
 /// Aqui começa o item específico
itemRouter.route('/:casoId')
    .get((req,res) => {
        res.end('Mandando detalhes do caso: ' + req.params.casoId +' to you!');
    })
    .post( (req, res) => {
        res.statusCode = 403;
        res.end('POST - não suportado'+ req.params.casoId);
    })
    .put((req, res, next) => { // Json  -- Trocar Nome
        res.write('Atualizando caso : ' + req.params.casoId + '\n');
        res.end('Com as seguintes insformações: ' + req.body.nome);
      })
    .delete((req, res, next) => {
          res.end('Deletando caso : ' + req.params.casoId);
      });
      
    module.exports = rotaCovid;
    