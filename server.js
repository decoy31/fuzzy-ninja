var express = require('express'),
    app = express(),
    port = 3000;

app.configure('development', function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    //app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname));
    app.use(errorHandler);
});

app.configure('production', function () {
    app.use(express.static(__dirname));
});

app.listen(port);
console.log('Listening on port ' + port);

function errorHandler (err, req, res, next) {
    LogError(err);
    next(err);
}

function LogError (err) {
    console.error(err.stack);
}