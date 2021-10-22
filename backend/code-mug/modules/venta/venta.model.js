(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var VentaSchema = new Schema({
        fecha: {
          type: String,
          required: true,
        },
        vendedor: {
          type: String,
          required: true,
        },
        cliente: {
          type: String,
          required: true,
        },
        productos: {
          type: Array,
          required: true,
        },
      });

    module.exports = mongoose.model('ventas', VentaSchema);
})();