const mongoose = require('mongoose')


const productoSchema = mongoose.Schema({
    
    nombre:{
        type: String,
        required: true
    },

    codigo: {
        type: Number,
        required: true,
        unique: true
        
    },

    precio:{
        type: Number,
        required:true
    },

    cantidad:{
        type: Number,
        required: true
    },

    categoria:{
        type: String,
    }
    
}, { versionkey: false })

module.exports = mongoose.model('Producto', productoSchema)