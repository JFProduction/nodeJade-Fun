var express = require('express'),
    nib = require('nib'),
    app = express(),
    path = require('path'),
    bodyparser = require('body-parser'),
    mongodb = require('mongodb');

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.get('/', function(req, res) {
    res.render('index', { title: 'Simple Jade Site' });
});

app.get('/getGamers', function(req, res) {
    var mc = mongodb.MongoClient;
    var url = "mongodb://localhost:27017/nodejade";
    
    mc.connect(url, function(err, db) {
        if (err)
            console.log('Unable to connect to server... ', err);
        else {
            console.log('Connection to gamers DB Established');
            
            var collection = db.collection('gamers');
            collection.find({}).toArray(function(err, result) {
                if (err)
                    res.send(err);
                else if (result.length)
                    res.render('gametable', { gamers: result });
                else
                    res.send('No gamers found in DB');
                
                db.close();
            });
        }
    });
});

app.post('/addUser', function(req, res) {
    var mc = mongodb.MongoClient;
    var url = "mongodb://localhost:27017/nodejade";
    
    console.log(req.body);
    
    mc.connect(url, function(err, db) {
        if (err)
            console.log('Unable to connect to server... ', err);
        else {
            console.log('Connection to gamers DB Established');
            
            var collection = db.collection('gamers');
            var user = { 'username': req.body.username, 'game': req.body.game };
            
            collection.insert([user], function(err, result) {
                if (err)
                    console.log('Error inserting user... ', err);
                else
                    res.json({ msg: 'User Added' });
                db.close();
            });
        }
    });
});

app.listen(3000);
console.log('listening on port 3000');