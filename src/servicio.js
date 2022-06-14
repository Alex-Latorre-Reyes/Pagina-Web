const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');
const session = require('express-session')
const server = express();

const carroRoutes = require('./routes/carro')
const contactoRoutes = require('./routes/contacto')
const indexRoutes = require('./routes/index')
const productoRoutes = require('./routes/producto')
const loginRoutes = require('./routes/login')
const registroRoutes = require('./routes/registro')

server.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

server.set('port', process.env.PORT || 3000);
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(morgan('dev'));
server.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_tienda'
}, 'single'));
server.use(express.urlencoded({ extended: false }));


server.use('/', indexRoutes);
server.use('/index', indexRoutes);
server.use('/carro', carroRoutes);
server.use('/contacto', contactoRoutes);
server.use('/producto', productoRoutes);
server.use('/login', loginRoutes);
server.use('/registro', registroRoutes);




server.use(express.static(path.join(__dirname, 'public/image')));


server.listen(server.get('port'), () => {
    console.log(`server on port ${server.get('port')}`);
});