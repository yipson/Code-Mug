(function () {
    'use strict';

    module.exports = {
        createUsuario: createUsuario,
        fetchUsuarios: fetchUsuarios,
        fetchUsuarioById: fetchUsuarioById,
        updateUsuario: updateUsuario
    };

    var UsuarioModel = require('./usuario.module')().UsuarioModel;

    function createUsuario(usuario) {
        console.log(usuario);
        return UsuarioModel.create(usuario);
    }

    function fetchUsuarios() {
        return UsuarioModel.find({})
            .exec();
    }

    function fetchUsuarioById(usuarioId) {
        return UsuarioModel.findById(usuarioId)
            .exec();
    }

    function updateUsuario(usuarioId, usuario) {
        return UsuarioModel
            .findByIdAndUpdate(usuarioId, usuario, {new: true})
            .exec();
    }


})();