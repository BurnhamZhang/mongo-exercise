/**
 * Created by riyasushiming on 16/10/14.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var _ = require('underscore');
var uri = 'mongodb://127.0.0.1/test';
var Movie = require('./models/movie');
var User = require('./models/user');

mongoose.connect(uri);
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.locals.moment = require('moment');
app.listen(port);

// 首页
app.get('/', function (req, res) {
    Movie.fetch(function (err, movies) {
        res.render('index', {
            title: '首页',
            movies: movies
        })
    })
})

// detail page
app.get('/movie/:id', function (req, res) {

    var id = req.params.id;

    Movie.findById(id, function (err, movie) {
        console.log('movie', movie)
        res.render('detail', {
            title: '详情',
            movie: movie
        })
    })

})

// sign up

app.post('/user/signup', function (req, res) {
    var _user = req.body.user;
    var user = new User(_user);
    user.save(function (err, user) {
        if(err){
            console.log(err)
        }
        
        res.redirect('/admin/userlist')
    })
})


// list page
app.get('/admin/userlist', function (req, res) {
    User.fetch(function (err, users) {
        if (err) {
            console.log(err)
        }
        res.render('userlist', {
            title: '用户详情',
            users: users
        })
    })

})


// admin page
app.get('/admin/add', function (req, res) {
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
})

app.post('/admin/movie/add', function (req, res) {
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
})

// list page
app.get('/admin', function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err)
        }
        res.render('list', {
            title: '后台详情',
            movies: movies
        })
    })

})

app.get('/admin/update/:id', function (req, res) {
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
})

app.delete('/admin/list', function (req, res) {
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
})

console.log('app inited on port ' + port);
