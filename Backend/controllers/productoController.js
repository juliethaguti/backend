const Producto = require('../models/Producto')

// Agregar producto

exports.agregarProducto = async (req, res) => {
console.log('llega')

    try {
        let productos = new Producto(req.body)
        await productos.save()
        res.json(productos)   
        
    } catch (error) {
        console.log(error)
        res.status(400).send('Hubo un error al agregar el producto')
    }
 }

// MOstrar todos los productos

exports.mostrarProductos = async (req, res) => {
    try {
        
        const productos = await Producto.find({})
         res.status(200).json({ productos })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ msg: 'Error no se encontraron los productos' })
    }
 }