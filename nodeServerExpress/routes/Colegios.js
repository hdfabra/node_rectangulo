const express = require('express');
const bodyParser = require('body-parser');

const profesorRouter = express.Router();

profesorRouter.use(bodyParser.json());

profesorRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Este metodo retornara la lista de profesores');
})
.post((req, res, next) => {
    res.end('Se agregó el profesor ' + req.body.primernombre + ' que vive en : ' + req.body.segundonombre);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('el metodo PUT no es soportado en  /profesores');
})
.delete((req, res, next) => {
    res.end('Eliminando todos los profesores');
});

profesorRouter.route('/:profesorId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('El profesor: '+req.params.profesorId);
})
.post((req, res, next) => {
    res.end('Se agregare el profesor ' + +req.params.profesorId);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('el metodo PUT no es soportado en  /profesores');
})
.delete((req, res, next) => {
    res.end('Eliminando el profesor: '+req.params.profesorId);
});
module.exports = profesorRouter;