const express = require('express')
const conectarDB = require('../configdb/db')
const cors = require('cors')


const app = express()
const puerto = process.env.PORT || 5000

//Llamamos a nuestra función conectarDB
conectarDB()
app.use(cors())
app.use(express.json())

//Rutas del proyecto
app.use('/api/clientes', require('../routes/clienteRuta'))
app.use('/api/productos', require('../routes/productoRuta'))

//Ruta desde la Web
app.get('/', (req, res) => {
    res.send('Bienvenidos estamos conectados desde el navegador')
})

app.listen(puerto, () => console.log('Estamos conectados desde el servidor', puerto))
