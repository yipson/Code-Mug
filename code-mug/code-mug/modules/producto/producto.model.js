(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var ProductoSchema = new Schema({
        nombre: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        }
    });

    module.exports = mongoose.model('productos', ProductoSchema);
})();