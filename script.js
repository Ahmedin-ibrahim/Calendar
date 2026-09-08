var currentdate = new Date();
var month = currentdate.getMonth();
var year = currentdate.getFullYear();
var date = currentdate.getDate();
var currentDay = currentdate.getDay();

function showCurrentDate() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"];
    var currentDate = monthNames[month] + " " + date + ", " + year;
    document.getElementById("MyCurrentDateDisplay").innerHTML = currentDate;
}

function showCalendar() {
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var monthNames = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"];
    var calendar = "<h2>" + monthNames[month] + " " + year + "</h2>";
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    calendar += "<table>";

    calendar += "<tr>";

    for (var i = 0; i < dayNames.length; i++) {
        calendar += "<td>" + dayNames[i] + "</td>";
    }

    calendar += "</tr>";

    for (var blank = 0; blank < firstDay; blank++) {
        calendar += "<td></td>";
    }

    for (var day = 1; day <= daysInMonth; day++) {
        calendar += "<td>" + day + "</td>";

        if ((firstDay + day) % 7 === 0) {
            calendar += "</tr><tr>";
        }
    }

    document.getElementById("MyCalendarDisplay").innerHTML = calendar;
}

function previousMonth() {
    month--;

    if (month < 0) {
        month = 11;
        year--;
    }

    showCalendar();
}

function nextMonth() {
    month++;

    if (month > 11) {
        month = 0;
        year++;
    }

    showCalendar();
}

showCalendar();

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime, 1000);
}

showTime();
