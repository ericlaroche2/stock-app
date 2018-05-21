
console.log('main controller');
var request = require("request")
var config = require('../config');
let APapikey = config.apikey; //alphavantage apikey


var url ="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=F&outputsize=full&apikey="+APapikey




module.exports = function(app){

    app.get('/', function (req, res){
        console.log('GET');
        const alpha = require('alphavantage')({ key: key });

        request({
            url: url,
            json: true
        }, function (error, response, data) {

            if (!error && response.statusCode === 200) {
                var json = JSON.stringify(data);
                res.render('index.ejs', {data: json});
            }
        });

        //
        // alpha.data.intraday(`msft`).then(data => {
        //     var timeseries=data["Time Series (1min)"]
        //     for (var key in timeseries) {
        //         if (timeseries.hasOwnProperty(key)) {
        //
        //            // console.log(key + " -> " + timeseries[key]["4. close"]);
        //             var date = new Date(key);
        //            // console.log(date.toString())
        //         }
        //     }
        //     var json = JSON.stringify(data);
        //     res.render('index.ejs', {data: json});
        // });

    });

    app.post('/', function (req,res){
        console.log('POST');
        console.log(req.body);
    });


    app.delete('/:item', function (req,res){
        console.log('DELETE');
        console.log(req.params.item);

    });


};