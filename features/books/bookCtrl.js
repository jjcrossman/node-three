module.exports = {
  getBooks( req, res ) {
    return res.status( 200 ).json( books );
  }
  , postBook( req, res ) {
    req.body._id = books[ books.length - 1 ]._id + 1;
    books.push( req.body );
    return res.status( 200 ).json( books );
  }
};

const books = [
    {
        title: "Where the wild things are"
        , description: "Trippy animals"
        , _id: 0
    }
    ,  {
        title: "Cloudy with a chance of meatballs"
        , description: "Who knows, no one has read it"
        , _id: 1
    }
    , {
        title: "Harry Potter"
        , description: "Wizards and stuff"
        , _id: 2
    }
];
