//REQUIRES
const express = require( "express" );
const { json } = require( "body-parser" );
const cors = require( "cors" );
const session = require( "express-session" );
const sessionConfig = require( "./config/sessionConfig" );
const app = express();
const port = 4000;

//MIDDLEWARE
app.use( cors() ); //cors opens our server to anyone to make any request to any endpoint on it. You only need cors for requests coming from outside.
app.use( session( sessionConfig ) );
app.use( json() );
app.use( express.static( `${ __dirname }/public` ) ); //express.static is express's way of serving static files to a browser (the presumed request maker). Those are files we server to the front end? dirname is built in to Node, and it's the absolute path from the root of your computer. `${ __dirname }/public` thus means: ~/Users/JJ/devmtn/node-three/public. Express will only server this file when necessary (it is able to serve it on every request though).

//ROUTES

const bootRoutes = require( "./features/books/bookRoutes.js" );
bootRoutes( app );

const readingRoutes = require( "./features/readingList/readingListRoutes.js" );
readingRoutes( app );

//REST

//LISTEN
app.listen( port, () => console.log( "node-three is listening on port: " + port ) );
