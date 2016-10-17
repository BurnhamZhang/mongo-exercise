/**
 * Created by riyasushiming on 16/10/14.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var uri = 'mongodb://127.0.0.1/test';

var mongoStore = require('connect-mongo')(session);
var morgan = require('morgan');

mongoose.connect(uri);
var app = express();

app.set('views', './app/views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
    secret: 'mongo-test',
    store :new mongoStore({
        url:uri,
        collection:'sessions'
    }),
    resave: false,
    saveUninitialized: true
}))

if(app.get('env') ==='development'){
    app.set('showStackError',true);
    app.use(morgan(':method :url :status'));
    app.locals.pretty = true;
    mongoose.set('debug',true);
}

require('./config/routes')(app);


app.listen(port);

console.log('app inited on port ' + port);
