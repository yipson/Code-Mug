(function () {
    'use strict';

    module.exports = {
        addUsuario: addUsuario,
        getUsuarios: getUsuarios,
        getUsuarioById: getUsuarioById,
        modifyUsuario: modifyUsuario
    };

    var UsuarioService = require('./usuario.module')().UsuarioService;
    const { BadRequest } = require('../util/errors');


    function addUsuario(req, res, next) {
        const { nombre, numero, email, rol } = req.body;
        try {
            if(!nombre || !numero || !email || !rol){
                throw new BadRequest('Missing required filed: nombre, numero, email and rol');
            }

            UsuarioService.createUsuario(req.body)
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

    function getUsuarios(req, res, next) {
        UsuarioService.fetchUsuarios()
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

    function getUsuarioById(req, res, next) {
        UsuarioService.fetchUsuarioById(req.params.usuarioId)
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

    function modifyUsuario(req, res, next) {
        UsuarioService.updateUsuario(req.params.usuarioId, req.body)
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