function getDate(dayNum, weekdayNum, monthNum, yearNum) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return weekdays[weekdayNum] + ", " + months[monthNum] + " " + dayNum + " " + yearNum;
}