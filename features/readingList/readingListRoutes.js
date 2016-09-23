const readingListCtrl = require( "./readingListCtrl.js" );

module.exports = app => {
  app.get( "/api/reading-list", readingListCtrl.getList );
  app.post( "/api/reading-list/", readingListCtrl.addBookToList );
};
