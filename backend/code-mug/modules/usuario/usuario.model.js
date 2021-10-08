(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var UsuarioSchema = new Schema({
        nombre: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true
        },
        estado: {
            activo: true,
            type: Boolean,
            required: true
        }
    });

    module.exports = mongoose.model('usuarios', UsuarioSchema);
})();