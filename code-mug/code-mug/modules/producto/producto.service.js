(function () {
    'use strict';

    module.exports = {
        createProducto: createProducto,
        fetchProductos: fetchProductos,
        fetchProductoById: fetchProductoById,
        updateProducto: updateProducto,
        deleteProducto: deleteProducto
    };

    var ProductoModel = require('./producto.module')().ProductoModel;

    function createProducto(producto) {
        return ProductoModel.create(producto);
    }

    function fetchProductos() {
        return ProductoModel.find({})
            .exec();
    }

    function fetchProductoById(productoId) {
        return ProductoModel.findById(productoId)
            .exec();
    }

    function updateProducto(productoId, producto) {
        return ProductoModel
            .findByIdAndUpdate(productoId, producto, {new: true})
            .exec();
    }

    function deleteProducto(productoId) {
        return ProductoModel
            .findByIdAndRemove(productoId)
            .exec();
    }

})();