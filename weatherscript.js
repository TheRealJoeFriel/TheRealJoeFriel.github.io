
function httpGet() {
    var theUrl = "http://dataservice.accuweather.com/currentconditions/v1/333562?apikey=eAEd8x5QoJ7YgOa9vGEYb6QN5B2Dknvo&language=en-us&details=false HTTP/1.1";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function displayWeather(weather) {
    document.write(weather[0]["Temperature"]["Imperial"]["Value"] + "<sup>o</sup>" + weather[0]["Temperature"]["Imperial"]["Unit"] + " / ");
    document.writeln(weather[0]["Temperature"]["Metric"]["Value"] + "<sup>o</sup>" + weather[0]["Temperature"]["Metric"]["Unit"] + "\n");
    document.write(weather[0]["WeatherText"]);
    document.write("<img src=https://developer.accuweather.com/sites/default/files/" + weather[0]["WeatherIcon"]  + "-s.png></img>");
}

