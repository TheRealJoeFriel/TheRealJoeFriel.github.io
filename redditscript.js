
function httpGetReddit() {
    var theUrl = "https://www.reddit.com/r/all.json";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function getFirstFiveReddit(reddit) {
    var i;
    for (i = 0; i < 5; i++) {
        var story = reddit.data.children[i].data

        document.getElementById('reddit').innerHTML += "<span>";
        if (story.thumbnail != "default") {
            document.getElementById('reddit').innerHTML += "<img src="+story.thumbnail+" alt='Unable to load image' height=45px width=45px align='left'>"; // onerror='replaceImageWithText()'
        } else {
            document.getElementById('reddit').innerHTML += "<img src=defaulticons/redditdefault.jpg alt='Unable to load image' height=45px width=45px align='left'>";
        }
        document.getElementById('reddit').innerHTML += "<a href="+story.url+">"+story.title+"</a>";
        document.getElementById('reddit').innerHTML += "</span><br><br>"

    }
}

function replaceImageWithText() {
    // idk fix this
}
