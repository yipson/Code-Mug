(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            UsuarioController: require('./usuario.controller'),
            UsuarioMiddleware: require('./usuario.middleware'),
            UsuarioService: require('./usuario.service'),
            UsuarioModel: require('./usuario.model')
        }
    }

})();