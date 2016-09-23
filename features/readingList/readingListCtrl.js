module.exports = {
  addBookToList( req, res ) {
    if ( req.session.hasOwnProperty( "readingList" ) ) {
      req.session.readingList.push( req.body );
      return res.status( 200 ).json( req.session.readingList );
    } else {
      req.session.readingList = [ req.body ];
    }

    return res.status( 200 ).json( req.session.readingList );
  }
  , getList( req, res ) {
    if ( req.session.hasOwnProperty( "readingList" ) ) {
      return res.status( 200 ).json( req.session.readingList );
    }
    return res.status( 200 ).json( [] );
  }
};

/*

req = {
  session: {
    readingList: []
  }
};

*/
