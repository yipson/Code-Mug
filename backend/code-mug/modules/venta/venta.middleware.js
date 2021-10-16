(function () {
    'use strict';

    module.exports = {
        addVenta: addVenta,
        getVentas: getVentas,
        getVentaById: getVentaById,
        modifyVenta: modifyVenta
    };

    var VentaService = require('./venta.module')().VentaService;
    const { BadRequest } = require('../util/errors');


    function addVenta(req, res, next) {
        const { fecha, vendedor, cliente, productos } = req.body;
        try {
            if(!fecha || !vendedor || !cliente ||  !productos){
                throw new BadRequest('Se requiere fecha, vendedor, cliente y productos');
            }

            VentaService.createVenta(req.body)
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

    function getVentas(req, res, next) {
        VentaService.fetchVentas()
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

    function getVentaById(req, res, next) {
        VentaService.fetchVentaById(req.params.ventaId)
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

    function modifyVenta(req, res, next) {
        VentaService.updateVenta(req.params.ventaId, req.body)
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