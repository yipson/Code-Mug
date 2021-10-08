(function (){
    'use strict';

    var express = require('express');
    var router = express.Router();


    var UsuarioMiddleware = require('./usuario.module')().UsuarioMiddleware;

    router.post('/',
        UsuarioMiddleware.addUsuario,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        UsuarioMiddleware.getUsuarios,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:usuarioId',
        UsuarioMiddleware.getUsuarioById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:usuarioId',
        UsuarioMiddleware.modifyUsuario,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();