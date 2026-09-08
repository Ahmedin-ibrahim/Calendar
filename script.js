var currentdate = new Date();
var month = currentdate.getMonth();
var year = currentdate.getFullYear();
var date = currentdate.getDate();

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