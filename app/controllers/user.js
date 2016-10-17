/**
 * Created by zhangbohan on 16/10/17.
 */
// sign up
var User = require('../models/user');

exports.signup = function (req, res) {
    var _user = req.body.user;

    User.find({name: _user.name}, function (err, user) {
        if (err) {
            console.log(err)
        }

        if (!user) {
            res.redirect('/admin/userlist')
        }
        else {
            user = new User(_user);
            user.save(function (err, user) {
                if (err) {
                    console.log(err)
                }

                res.redirect('/admin/userlist')
            })
        }
    })

}


// signin

exports.signin = function (req, res) {
    var _user = req.body.user;
    var name = _user.name;
    var password = _user.password;

    User.findOne({name: name}, function (err, user) {
        if (err) {
            console.log(err)
        }

        if (!user) {
            res.redirect('/')
        }
        else {
            user.comparePassword(password, function (err, isMatch) {
                if (isMatch) {
                    req.session.user = user;

                    res.redirect('/')
                }
                else {
                    console.log('user not exist')
                }
            })
        }
    })
}


//logout

exports.logout = function (req, res) {
    delete req.session.user;
    res.redirect('/')
}


// list page
exports.list = function (req, res) {
    User.fetch(function (err, users) {
        if (err) {
            console.log(err)
        }
        res.render('userlist', {
            title: '用户详情',
            users: users
        })
    })

}