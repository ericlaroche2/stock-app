var express = require('express');
var mainController = require('./controllers/maincontroller');
var app = express();
var $ = require('jquery');

app.set('view engine', 'ejs');

app.use(express.static('./views'));
app.use(express.static('./dataOperations'));

// alpha.data.intraday(`msft`).then(data => {
//     var timeseries=data["Time Series (1min)"]
//
//     for (var key in timeseries) {
//         if (timeseries.hasOwnProperty(key)) {
//
//             // console.log(key + " -> " + timeseries[key]["4. close"]);
//             var date = new Date(key);
//             // console.log(date.toString())
//         }
//     }
//     var json = JSON.stringify(data);
//
//     res.render('index.ejs', {data: json});
// });
// alpha.data.intraday(`msft`).then(data => {
//     console.log(typeof data);
//
//     var timeseries=data["Time Series (1min)"]
//     var b=data["Time Series (1min)"]
//
//     for (var key in timeseries) {
//         if (timeseries.hasOwnProperty(key)) {
//
//             console.log(key + " -> " + timeseries[key]["4. close"]);
//             var date = new Date(key);
//             console.log(date.toString())
//         }
//     }
//
//
//     //var json = JSON.stringify(data);
//     // var fs = require('fs');
//     // fs.writeFile ("input.json", json, function(err) {
//     //         if (err) throw err;
//     //         console.log('complete');
//     //     }
//     // );
// });

console.log('you are listening to port 3000');
//localhost:300/assets/styles.css

app.listen(3000);
mainController(app);
