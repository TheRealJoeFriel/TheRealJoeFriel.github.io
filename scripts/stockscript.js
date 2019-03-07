function httpGetStocks(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function getTopGainer(stocks) {
    var i;
    var maxIndex = 0;
    var max = Number.NEGATIVE_INFINITY;
    for (i = 0; i < stocks.length; i++) {
        if (stocks[i].latestPrice > max) {
            max = stocks[i].latestPrice;
            maxIndex = i;
        }
    }
    return stocks[maxIndex];
}

function getTopLoser(stocks) {
    var i;
    var minIndex = 0;
    var min = Number.POSITIVE_INFINITY;
    for (i = 0; i < stocks.length; i++) {
        if (stocks[i].latestPrice < min) {
            max = stocks[i].latestPrice;
            maxIndex = i;
        }
    }
    return stocks[minIndex];

}

function generateStockSummary(stock, id) {

    var name = stock.companyName;
    var sym = stock.symbol;
    var price = stock.latestPrice;
    var change = stock.change.toString();
    var changePerc = stock.changePercent;


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

function generateStockChart(stock, id) {
    var name = stock.companyName;
    var sym = stock.symbol;
    var stockPrices = [];
    var xLabel = [];
    var color;
    var backgroundColor;

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

    if (id == 'gainerChart') {
        color = '#32CD32';
        backgroundColor = 'rgba(50, 205, 50, .3)';
    } else {
        color = '#FF0000';
        backgroundColor = 'rgba(255, 0, 0, .3)'
    }

    var ctx = document.getElementById(id);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabel.reverse(),
            datasets: [{
                label: name,
                data: stockPrices.reverse(),
                borderColor: color,
                backgroundColor: backgroundColor,
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 5,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Price (USD)'
                    }
                }],
                xAxes: [{
                    position: 'bottom',
                    scaleLabel: {
                      display: true,
                      labelString: 'Date'
                    }
                  }] 
            }
        }
    });
}