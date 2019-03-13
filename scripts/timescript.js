

function getDate(currentDate) {

    var dayNum = currentDate.getDate();
    var weekdayNum = currentDate.getDay();
    var monthNum = currentDate.getMonth();
    var yearNum = currentDate.getFullYear();

    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById('timeDate').innerHTML +=  "<h1 class='display-4'>" + weekdays[weekdayNum] + ", <br>" + months[monthNum] + " " + dayNum + " " + yearNum + "</h1>";
}