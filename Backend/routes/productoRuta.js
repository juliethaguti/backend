const express = require('express')
const router = express.Router()
const productoController = require('../controllers/productoController')

router.post('/', productoController.agregarProducto)
router.get('/', productoController.mostrarProductos)
router.get('/:id',productoController.mostrarProducto)
//router.put('/:id', productoController.modificarProducto)
/*router.patch('/:id',productoController.editarProducto)
router.delete('/:id',productoController.editarProducto)
*/
module.exports = router