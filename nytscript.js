// Creates a connection to NYT API and returns a json object 
function httpGetNYT() {
    var theUrl = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=x19FApjOENkQi6yvd235Ab30dS7WXyDJ";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

// Retrieves the five top stories from the new york times and provides a summary
function getFirstFiveNYT(nyt) {
    var i;
    for (i = 0; i < 5; i++) {
        var story = nyt["results"][i];

        document.getElementById("nytstories").innerHTML += "<span>"
        document.getElementById("nytstories").innerHTML += "<img src="+story.multimedia[0].url+" alt='Unable to load image' height=50px width=50px align='left'>";
        document.getElementById("nytstories").innerHTML += "<a href="+ story.short_url + '>' + story.title + '</a>';
        document.getElementById("nytstories").innerHTML += "<div class=\'abstract col-med-offset-1'>" + story.abstract + "</div>";
        document.getElementById("nytstories").innerHTML += "</span><br>"

    }
}