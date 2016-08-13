var express = require('express'),
    nib = require('nib'),
    app = express(),
    path = require('path');

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
    res.render('index', { title: 'Simple Jade Site' });
});

app.get('/getGamers', function(req, res) {
    var gamers = [
        {
            'gamertag': 'jimmyfargo',
            'game': 'Halo 5'
        },
        {
            'gamertag': 'Bandarman9001',
            'game': 'Pokemon GO'
        },
        {
            'gamertag': 'FelixTorres8',
            'game': 'COD'
        },
        {
            'gamertag': 'ItsJagerTime69',
            'game': 'Over Watch'
        },
        {
            'gamertag': 'slui1001',
            'game': 'Ping Pong'
        }
    ];
    res.render('gametable', { gamersList: gamers });
});

app.listen(3000);
console.log('listening on port 3000');