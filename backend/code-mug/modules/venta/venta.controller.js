(function (){
    'use strict';

    var express = require('express');
    var router = express.Router();


    var VentaMiddleware = require('./venta.module')().VentaMiddleware;

    router.post('/',
        VentaMiddleware.addVenta,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        VentaMiddleware.getVentas,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:ventaId',
        VentaMiddleware.getVentaById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:ventaId',
        VentaMiddleware.modifyVenta,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();