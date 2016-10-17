/**
 * Created by zhangbohan on 16/10/17.
 */
var Index = require('../app/controllers/index');
var Movie = require('../app/controllers/movie');
var User = require('../app/controllers/user');

module.exports = function (app) {
    // pre
    app.locals.moment = require('moment');


    app.use(function (req, res, next) {
        console.log('user', req.session.user);
        app.locals.user = req.session.user;
        next();

    })
//  Index
    app.get('/', Index.index)

//  User
    app.post('/user/signup', User.signup)
    app.post('/user/signin', User.signin)
    app.get('/user/logout', User.logout)
    app.get('/admin/userlist', User.list)

//  Movie
    app.get('/movie/:id', Movie.detail)
    app.get('/admin/add', Movie.add)
    app.post('/admin/movie/add', Movie.save)
    app.get('/admin', Movie.list)
    app.get('/admin/update/:id', Movie.update)
    app.delete('/admin/list', Movie.del)

}