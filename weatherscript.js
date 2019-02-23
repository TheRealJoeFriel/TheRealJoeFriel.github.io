
function httpGet() {
    var theUrl = "http://dataservice.accuweather.com/currentconditions/v1/333562?apikey=eAEd8x5QoJ7YgOa9vGEYb6QN5B2Dknvo&language=en-us&details=false HTTP/1.1";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function displayWeather(weather) {
    var impTemp = weather[0]["Temperature"]["Imperial"]["Value"] + "<sup>o</sup>" + weather[0]["Temperature"]["Imperial"]["Unit"];
    var metTemp = weather[0]["Temperature"]["Metric"]["Value"] + "<sup>o</sup>" + weather[0]["Temperature"]["Metric"]["Unit"];
    var weatherText = weather[0]["WeatherText"];
    var weatherIconPath = "weathericons/weather" + weather[0]["WeatherIcon"] + ".png";
    document.writeln("<div class=\"float-right\">");
        document.writeln(impTemp + " / " + metTemp);
        document.write(weatherText);
        document.write("<img src="+weatherIconPath+">");
    document.writeln("</div>");
}

