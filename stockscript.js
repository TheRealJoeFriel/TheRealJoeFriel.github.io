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

    var chartURL = "https://cloud.iexapis.com/beta/stock/"+sym+"/chart/1m?token=pk_bfdc9d9be6a242bab1497e23d22fe997"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", chartURL, false); 
    xmlHttp.send(null);
    var chart = JSON.parse(xmlHttp.responseText);

    document.getElementById(id).innerHTML += name + " ";
    document.getElementById(id).innerHTML += sym + "<br>";
    document.getElementById(id).innerHTML += "$" + price + " ";
    if (change.toString()[0] == "-") {
        document.getElementById(id).innerHTML += "-$" + change.substr(1) + " ";
    } else {
        document.getElementById(id).innerHTML += "$" + change + " ";
    }
    document.getElementById(id).innerHTML += changePerc + "% ";
    return chart;
}