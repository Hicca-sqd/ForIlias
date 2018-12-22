const express = require( 'express' )
const bodyParser = require( 'body-parser' )
const morgan = require( 'morgan' )
const mongoose = require( 'mongoose' )
const path = require( 'path' ) 
// const TelegramBot = require('node-telegram-bot-api');
const session = require( 'express-session' )
const MongoStore = require( 'connect-mongo' )( session )
mongoose.connect( 'mongodb://localhost/simbios' ,{ useNewUrlParser: true }) 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const redis = require( 'redis' )
const app = express() //создаем приложение
app.use( express.static( path.join( __dirname, 'public' ) ) ) 
app.use( bodyParser.urlencoded( {
	extended: true
} ) )
app.use( bodyParser.json( {
	limit: '5mb'
} ) )
app.use( morgan( 'dev' ) ) 
app.use( session( {
	resave: true,
	secret: 'secret',
	saveUninitialized: true,
	key: 'key',
	store: new MongoStore( {
		mongooseConnection: mongoose.connection
	} ) 
} ) );
app.use( '/api', require( './server/routes' ) )
app.get( '/', ( req, res, next ) => {
	res.send( 'Home page' )
} )
app.get( '*', ( req, res, next ) => {
	res.redirect( '/#' + req.originalUrl );
} )
app.listen( 3005, () => { //забираем 300 порт
	console.log( 'Server started' )
} )