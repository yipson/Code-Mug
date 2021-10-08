(function () {
    'use strict';

    module.exports = {
        addProducto: addProducto,
        getProductos: getProductos,
        getProductoById: getProductoById,
        modifyProducto: modifyProducto,
        removeProducto: removeProducto
    };

    var ProductoService = require('./producto.module')().ProductoService;
    const { BadRequest } = require('../util/errors');


    function addProducto(req, res, next) {
        const { nombre, precio } = req.body;
        try {
            if(!nombre){
                throw new BadRequest('Missing required filed: nombre');
            }

            ProductoService.createProducto(req.body)
            .then(success)
            .catch(failure);

            function success(data) {
                req.response = data;
                next();
            }

            function failure(error) {
                next(error);
            }
        } catch (err) {
            next(err)
        }
    }

    function getProductos(req, res, next) {
        ProductoService.fetchProductos()
        .then(success)
        .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }
    }

    function getProductoById(req, res, next) {
        ProductoService.fetchProductoById(req.params.productoId)
        .then(success)
        .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }
    }

    function modifyProducto(req, res, next) {
        ProductoService.updateProducto(req.params.productoId, req.body)
        .then(success)
        .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }
    }

    function removeProducto(req, res, next) {
        ProductoService.deleteProducto(req.params.productoId)
        .then(success)
        .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }
    }

})();