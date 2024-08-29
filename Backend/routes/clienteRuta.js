const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')

router.post('/', clienteController.agregarCliente)
router.get('/', clienteController.mostrarClientes)
router.get('/:id',clienteController.mostrarCliente)
//router.put('/:id', clienteController.modificarCliente)
router.patch('/:id',clienteController.editarCliente)
router.delete('/:id',clienteController.editarCliente)

module.exports = router
