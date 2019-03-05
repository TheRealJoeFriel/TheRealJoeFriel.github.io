function httpGetStocks(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function generateStockSummary(stocks, id) {

    var name = stocks[0].companyName;
    var sym = stocks[0].symbol;
    var price = stocks[0].latestPrice;
    var change = stocks[0].change.toString();
    var changePerc = stocks[0].changePercent;


    document.getElementById(id).innerHTML += name + " ";
    document.getElementById(id).innerHTML += sym + "<br>";
    document.getElementById(id).innerHTML += "$" + price + " ";
    if (change.toString()[0] == "-") {
        document.getElementById(id).innerHTML += "-$" + change.substr(1) + " ";
    } else {
        document.getElementById(id).innerHTML += "$" + change + " ";
    }
    document.getElementById(id).innerHTML += changePerc + "% ";
}

function formatLayout() {
    var currentDate = new Date();
    var xLabel = [];

    for (var i = 30; i > 0; i--) {
        xLabel.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i).format('mm-dd'))
    }

    return xLabel;


}

function generateStockChart(stocks, id) {
    var name = stocks[0].companyName;
    var sym = stocks[0].symbol;
    var stockPrices = [];
    var xLabel = [];

    // Get the stock data for the gainer or loser
    var chartURL = "https://cloud.iexapis.com/beta/stock/"+sym+"/chart/1m?token=pk_bfdc9d9be6a242bab1497e23d22fe997"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", chartURL, false); 
    xmlHttp.send(null);

    var chart = JSON.parse(xmlHttp.responseText);

    for (var i = 18; i >= 0; i--) {
        stockPrices.push(chart[i].close);
        xLabel.push(chart[i].date.substr(5));
    }

    var ctx = document.getElementById(id);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabel,
            data: stockPrices,
            borderColor: 'red',
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 50,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Price (USD)'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Date'
                    }
                  }] 
            }
        }
    });
}