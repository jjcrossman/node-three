angular.module( 'readingList', [] )

.controller( "listCtrl", function ( $scope, listService ) {

  listService.getBooks().then( books => {
      $scope.books = books.data;
  } );

  listService.getReadingList().then( readingList => {
    $scope.readingList = readingList.data;
  } );

  $scope.addToReadingList = ( book ) => {
      listService.addToReadingList( book )
      .then( readingList => {
        $scope.readingList = readingList.data;
      } );
  };

} )

.service( "listService", function ( $http ) {

  this.getBooks = () => {
    return $http.get( "/api/books" );
  };

  this.addToReadingList = book => {
    return $http.post( "/api/reading-list", book );
  };

  this.getReadingList = book => {
    return $http.post( "/api/reading-list", book );
  };

} );
