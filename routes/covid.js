const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Casos = require('../models/casosCovid');

const rotaCovid = express.Router();

const itemRouter = express.Router({mergeParams: true});

rotaCovid.use('/', itemRouter);

rotaCovid.route('/')
.get((req,res,next) => {
    Casos.find({})
    .then((casos) => {
        res.statusCode = 200;
        res.setHeader ('Content-type', 'application/json');
        res.json(casos);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post ((req,res,next) => {
    Casos.create(req.body)
    .then ((caso) =>{
        console.log ('Caso adicionado', caso);
        res.statusCode = 200;
        res.setHeader ('Content-type', 'application/json');
        res.json(caso);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT - operação não suportada');
}) 
.delete((req, res, next) => {
    Casos.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
    
    

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
    