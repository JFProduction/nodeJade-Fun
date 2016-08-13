var express = require('express'),
    nib = require('nib'),
    app = express(),
    path = require('path'),
    mongodb = require('mongodb');

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
    res.render('index', { title: 'Simple Jade Site' });
});

app.get('/getGamers', function(req, res) {
    var mc = mongodb.MongoClient
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

app.listen(3000);
console.log('listening on port 3000');