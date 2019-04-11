// Returns the front page of Reddit as a JSON object
function httpGetReddit() {
    var theUrl = "https://www.reddit.com/r/all.json";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

// Retrieves the five top stories from Reddit and their thumbnails
function getFirstFiveReddit(reddit) {
    var i;
    for (i = 0; i < 5; i++) {
        var story = reddit.data.children[i].data

        document.getElementById('reddit').innerHTML += "<span>";
        if (story.thumbnail == "default" || story.is_self == true || story.thumbnail == "image") {
            document.getElementById('reddit').innerHTML += "<img src=defaulticons/redditdefault.jpg alt='Unable to load image' height=45px width=45px align='left'>";
        } else if (story.thumbnail == "nsfw") {
            document.getElementById('reddit').innerHTML += "<img src=defaulticons/redditNSFW.png alt='Unable to load image' height=45px width=45px align='left'>";
        } else {
            document.getElementById('reddit').innerHTML += "<img src="+story.thumbnail+" alt='Unable to load image' height=45px width=45px align='left'>";
        }
        document.getElementById('reddit').innerHTML += "<a href="+story.url+">"+story.title+"</a>";
        document.getElementById('reddit').innerHTML += "</span><br><br>"

    }
}

function getBackground() {
    var url = 'https://www.reddit.com/r/EarthPorn/top/.json';
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", url, false); 
    xmlHttp.send(null);
    
    var topPosts = JSON.parse(xmlHttp.responseText);
    var backgroundImage = topPosts.data.children[0].data.preview.images[0].source.url;
    var str = backgroundImage.replace("&amp;", "&");

    document.getElementById('backgroundImage').style.backgroundImage = 'url('+str+')';
    document.getElementById('backgroundImage').style.width = (document.documentElement.clientWidth+20)+'px';
    document.getElementById('backgroundImage').style.height = (document.documentElement.clientHeight+10)+'px';
}