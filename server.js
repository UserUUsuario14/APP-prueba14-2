const express = require('express')
const { engine } = require('express-handlebars')
require('dotenv').config()   
const app = express()

app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', './views')
/******************************************/
/*MIDLEWARE*/
/******************************************/
app.use(express.static('public'))
app.use(express.json())

//RUTAS BASICAS NP
app.get('/', (req, res) => {
  res.render('home', {
    nombre:'Fredo',
    helpers: {
        saludo: function(){
            return "Helper Saludo HOLA "
        },
        getFecha: function(){
            return new Date().getFullYear()
        }
    }
  })
})

app.get('/login', (req, res) => {
    res.render('login', {
      nombre:'Fredo',
      apellido: 'Gonzalez',
      mail: 'fredo_y@hotmail.com'
    })
  })
  

app.get('/visitas', (req, res) => {
    res.send('GET VISITAS')
    console.log('se consulto correctamente la ruta /visitas ')
  })
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Puerto escuchando en el Puerto:  ${PORT}`)
})