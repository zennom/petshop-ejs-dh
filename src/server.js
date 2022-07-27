const express = require('express')
const dotenv = require('dotenv')
const mustache = require('mustache-express')
const path = require('path')
const server = express()

//importando as rotas de index
const mainRoutes = require('./routes/index');

dotenv.config()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())
server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRoutes)

//criar a page 404
server.use((req, res) => {
	res.render('pages/404');
})

server.listen(process.env.PORT)


