/**
 * Created by haochenli on 15/2/11.
 */
var mongoose=require('mongoose');
var MovieSchema = require('../schemas/movie');

var Movie = mongoose.model('Movie',MovieSchema);

module.exports = Movie;