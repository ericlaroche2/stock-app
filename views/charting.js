let asdfa=google.charts.load('current', {'packages':['annotatedtimeline']}).then(function (result) {
    google.charts.setOnLoadCallback(drawChart2( getData));
});


function drawChart2(data) {

        //data is the JSON string
        console.log(data);
        var timeseries=data["Time Series (Daily)"]

        var graphtable = new google.visualization.DataTable();
        graphtable.addColumn('date', 'Date');
        graphtable.addColumn('number', 'Stock price');
        graphtable.addColumn('string', 'title1');
        graphtable.addColumn('string', 'text1');
        var rows=[];

        for (var key in timeseries) {
            if (timeseries.hasOwnProperty(key)) {
              //  console.log(key + " -> " + timeseries[key]["4. close"]);
                var date = new Date(key);
                rows.push([date, Number(timeseries[key]["4. close"]),undefined, undefined ])

            }
        }
        graphtable.addRows(rows);

        var chart = new google.visualization.AnnotatedTimeLine(document.getElementById('chart_div'));
      //  document.getElementById("stockname").innerHTML = ticker_symbol;
        chart.draw(graphtable, {displayAnnotations: true});


}

