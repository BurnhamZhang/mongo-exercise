/**
 * Created by zhangbohan on 16/10/17.
 */
var Movie = require('../models/movie');

exports.index =  function (req, res) {
    Movie.fetch(function (err, movies) {
        res.render('index', {
            title: '首页',
            movies: movies
        })
    })
}