// Accesses the CNN API to return the top stories
function httpGetCNN() {
    var theUrl = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=378e2cadb06a4934806430b43b13e878";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

// Retrieves the five top stories from CNN and provides a summary
function getFirstFiveCNN(cnn) {
    var i;
    for (i = 0; i < 5; i++) {
        var story = cnn.articles[i];

        document.getElementById("CNNstories").innerHTML += "<span>"
        if (typeof(story.urlToImage) != 'undefined') {
            document.getElementById("CNNstories").innerHTML += "<img src="+story.urlToImage+" alt='Unable to load image' height=45px width=45px align='left'>";
        } else {
            document.getElementById("CNNstories").innerHTML += "<img src=defaulticons/cnndefault.jpg alt='Unable to load image' height=45px width=45px align='left'>";
        }
        document.getElementById("CNNstories").innerHTML += "<a href="+ story.url + '>' + story.title + '</a>';
        document.getElementById("CNNstories").innerHTML += "<div class=\'abstract col-med-offset-1'>" + story.description + "</div>";
        document.getElementById("CNNstories").innerHTML += "</span><br>"

    }
}
