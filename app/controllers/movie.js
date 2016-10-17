/**
 * Created by zhangbohan on 16/10/17.
 */
var Movie = require('../models/movie');
var _ = require('underscore');


// detail page
exports.detail = function (req, res) {

    var id = req.params.id;

    Movie.findById(id, function (err, movie) {
        console.log('movie', movie)
        res.render('detail', {
            title: '详情',
            movie: movie
        })
    })

}


// admin page
exports.add = function (req, res) {
    res.render('admin', {
        title: '后台录入',
        movie: {
            title: '',
            director: '',
            country: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    })
}

exports.save =  function (req, res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;
    if (id !== 'undefined') {
        Movie.findById(id, function (err, movie) {
            if (err) {
                console.log(err)
            }
            _movie = _.extend(movie, movieObj)
            _movie.save(function (err, movie) {
                if (err) {
                    console.log(err)
                }
                res.redirect('/movie/' + movie._id)
            })
        })
    }
    else {
        _movie = new Movie({
            director: movieObj.director,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash,
        });
        _movie.save(function (err, movie) {
            if (err) {
                console.log(err)
            }
            res.redirect('/movie/' + movie.id)
        })
    }
}

// list page
exports.list =  function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err)
        }
        res.render('list', {
            title: '后台详情',
            movies: movies
        })
    })

}

exports.update =  function (req, res) {
    var id = req.params.id;
    if (id) {
        Movie.findById(id, function (err, movie) {
            if (err) {
                console.log(err)
            }
            res.render('admin', {
                title: '后台更新页',
                movie: movie
            })
        })
    }
}

exports.del = function (req, res) {
    var id = req.query.id;
    if (id) {
        Movie.remove({_id: id}, function (err, movie) {
            if (err) {
                console.log(err)
            }
            else {
                res.json({
                    success: 1
                })
            }
        })
    }
}

