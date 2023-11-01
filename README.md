# managing-books
This repo is for managing books. Tech used - node.js, express.js, mongoose-mongoDB.

<!-- System requirements -->
Here mongoDb is used for the data-base locally so system must have the mongoDB installed and mongoDb services should be in runnig state.

<!-- HOW TO RUN -->
1. run - npm i              (to install dependency)
2. run - npm run book       (to run the server)

<!-- API END-POINTS -->

<!-- Create API -->
API -- localhost:4242/api-v1/create-new-book
request body -- { "author": "Mustaq Ahmad", "title": "This is  twisted karma", "summary": "summary is in summar" }
<!-- ** -->

<!-- List API -->
API -- localhost:4242/api-v1/fetch-book-details
request body -- { }
<!-- ** -->

<!-- List API Book Id -->
API -- localhost:4242/api-v1/fetch-book-details
request body -- { "id" : book_id }
<!-- ** -->


<!-- Update by id -->
API -- localhost:4242/api-v1/update-book-details
request body -- { "id" : book_id,  "author": "Ahmad", "title": "This is twisted karma part 2", "summary": "summary is in summar but feels good."  }
<!-- ** -->

<!-- Delete by id -->
API -- localhost:4242/api-v1/delete-book-by-id
request body -- { "id" : book_id }
<!-- ** -->