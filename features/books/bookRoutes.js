const bookCtrl = require( "./bookCtrl.js" );

module.exports = app => {
  app.get( "/api/books", bookCtrl.getBooks );
  app.post( "/api/books", bookCtrl.postBook );
};
