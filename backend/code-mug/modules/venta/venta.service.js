(function () {
    'use strict';

    module.exports = {
        createVenta: createVenta,
        fetchVentas: fetchVentas,
        fetchVentaById: fetchVentaById,
        updateVenta: updateVenta
    };

    var VentaModel = require('./venta.module')().VentaModel;

    function createVenta(venta) {
        console.log(venta);
        return VentaModel.create(venta);
    }

    function fetchVentas() {
        return VentaModel.find({})
            .exec();
    }

    function fetchVentaById(ventaId) {
        return VentaModel.findById(ventaId)
            .exec();
    }

    function updateVenta(ventaId, venta) {
        return VentaModel
            .findByIdAndUpdate(ventaId, venta, {new: true})
            .exec();
    }

})();