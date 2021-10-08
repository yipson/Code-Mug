(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            ProductoController: require('./producto.controller'),
            ProductoMiddleware: require('./producto.middleware'),
            ProductoService: require('./producto.service'),
            ProductoModel: require('./producto.model')
        }
    }

})();