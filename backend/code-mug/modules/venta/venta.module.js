(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            VentaController: require('./venta.controller'),
            VentaMiddleware: require('./venta.middleware'),
            VentaService: require('./venta.service'),
            VentaModel: require('./venta.model')
        }
    }

})();