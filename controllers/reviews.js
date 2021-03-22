const Movie = require('../models/movie');

module.exports = {
    create
};

function create(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        // We can push subdocs into Mongoose arrays
        movie.reviews.push(req.body);
        // Save any changes made to the movie doc
        movie.save(function(err) {
            console.log(movie, movie.reviews[0]);
          // Step 5:  Respond to the Request (redirect if data has been changed)
          res.redirect(`/movies/${movie._id}`);
        });
      });
};