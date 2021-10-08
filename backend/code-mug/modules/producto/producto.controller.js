(function (){
    'use strict';

    var express = require('express');
    var router = express.Router();


    var ProductoMiddleware = require('./producto.module')().ProductoMiddleware;

    router.post('/',
        ProductoMiddleware.addProducto,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        ProductoMiddleware.getProductos,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:productoId',
        ProductoMiddleware.getProductoById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:productoId',
        ProductoMiddleware.modifyProducto,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:productoId',
        ProductoMiddleware.removeProducto,
        function (req, res) {
            res.status(200).json(req.response);
        });

    module.exports = router;

})();