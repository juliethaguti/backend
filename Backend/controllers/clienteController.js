const Cliente = require('../models/Cliente')

//funcion agregar clientes

exports.agregarCliente = async (req, res) => {
    try {

        let clientes
            clientes = new Cliente(req.body)
        await clientes.save()
        res.json(clientes)   
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar el cliente')
    }
}

exports.mostrarClientes = async (req, res) => {
    
    try {
        const clientes = await Cliente.find()
        res.json(clientes)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar los')
    }
}

exports.mostrarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id)
        res.json(cliente)

        if (!cliente) {
            res.status(404).send({ msg: 'El cliente no se encuentra' })
        } else {
            res.json(cliente)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al buscar un cliente')
    }
}

//Modificar cliente con el método put
exports.modificarCliente = async (req, res) => {
    try {

        const cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, req.body,{new:true})
        if (!cliente) {
            res.status(404).send({ msg: 'El cliente no se encuentra' })
        } else {
            res.json(cliente)
        }

    } catch (error) {
        
        console.log(error)
        res.status(500).send('Error al buscar un cliente')

    }
}

// Modificar cliente con el método patch

exports.editarCliente = async (req, res) => {
    try {

        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!cliente) {

            return res.status(404).send('El cliente no se encuentra')

        }res.json(cliente)
        
    } catch (error) {       
        
        console.log(error)
        res.status(500).send('Error al buscar un cliente')

    }
}

//Eliminar cliente

exports.eliminarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findById({_id: req.params.id})

        if (!cliente) {
            res.status(404).send({ msg: 'El cliente no se encuentra' })
            return
        }

        await Cliente.findOneAndDelete({_id: req.params.id})
        res.json({ msg: "El cliente fue eliminado con exito" })
        return

        }
     catch (error) {
        console.log(error)
        res.status(500).send('Error al buscar un cliente')
    }
}
