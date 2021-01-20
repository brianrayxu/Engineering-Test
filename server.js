const request = require('request');

var result;

request('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
        var obj = JSON.parse(JSON.stringify(body))
        //clean JSON to just have relevant info
        let weatherDoc = {
        "date": obj.dataseries[0].date,
        "temp": obj.dataseries[0].temp2m.max,
        "weather": obj.dataseries[0].weather,
        }

        const url = "mongodb+srv://Brian:cyp1b1@cluster0.v056q.mongodb.net/test1?retryWrites=true&w=majority";
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect(url, function (err, client) {
            if (err) throw err;
            var db = client.db('test1');
            db.collection('weather').insertOne(weatherDoc)
            db.collection('weather').find().toArray(function(err, docs) {
                console.log("PRINTING ENTIRE DATABASE:");
                console.log(JSON.stringify(docs));
            });
            client.close();
  });
});
