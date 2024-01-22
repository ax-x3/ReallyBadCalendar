const regions = [
    "Reykjavík",
    "Roma",
    "القاهرة",
    "Москва",
    "دبي",
    "اسلام‌آباد",
    "Новосиби́рск",
    "บางกอก",
    "北京",
    "東京",
    "Naarm",
    "Магадан",
    "फ़िजी",
    "Sāmoa",
    "Hawaiʻi",
    "Alaska",
    "Los Angeles",
    "Arizona",
    "Ciudad de México",
    "New York",
    "San Juan",
    "Brasília",
    "South Georgia",
    "Cabo Verde"
];
const greetings = [
    "Good morning",
    "Good afternoon",
    "Good evening"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function load() {
    let deviceDate = new Date();

    let timezoneOffsetHours = 0 - deviceDate.getTimezoneOffset() / 60;

    let stupidOffsetHours = 6 + Math.floor(Math.random() * 24);
    let stupidRegion = regions[(timezoneOffsetHours + stupidOffsetHours) % 24];

    let localHour = deviceDate.getHours();
    let localMinute = deviceDate.getMinutes();
    let regionHour = (localHour + stupidOffsetHours) % 24;
    let regionTime = regionHour.toString() + ":" + localMinute.toString().padStart(2, '0');


    const dateID = Math.floor(Math.random() * 6);
    let localDate = "";

    if (dateID == 0) {
        if (Math.random() > 0.25) {
            localDate = "the day";
        } else {
            localDate = "not the day";
        }
    } else if (dateID == 1) {
        localDate = Math.floor(deviceDate.getTime() / 1000);
    } else if (dateID == 2) {
        let stupidMonth = Math.floor(Math.random() * 12);
        let stupidYear = deviceDate.getFullYear();
        if (deviceDate.getMonth() - 1 <= stupidMonth) {
            stupidYear -= 1;
        }
        let stupidDate = new Date(stupidYear, stupidMonth, 1);
        localDate = months[stupidMonth] + " " + Math.ceil((deviceDate.getTime() - stupidDate.getTime()) / 86400000).toString() + ", " + stupidYear;
    } else if (dateID == 3) {
        localDate = "year 13.79b";
    } else if (dateID == 4) {
        localDate = deviceDate.toISOString();
    } else if (dateID == 5) {
        let stupidDate = new Date(deviceDate.getTime() - Math.random() * 31536000000);
        localDate = "not " + days[stupidDate.getDay()] + ", " + months[stupidDate.getMonth()] + " " + stupidDate.getDate().toString() + ", " + stupidDate.getFullYear().toString();
    }


    if (regionHour < 12) {
        document.getElementById("greeting").innerHTML = greetings[0];
        regionTime += " AM";
    } else if (regionHour < 19) {
        document.getElementById("greeting").innerHTML = greetings[1];
    } else {
        document.getElementById("greeting").innerHTML = greetings[2];
    }
    document.getElementById("greeting").innerHTML += ",";
    
    document.getElementById("time").innerHTML = "It's <b> " + regionTime + " </b> in <span style='line-height: 0px;'>" + stupidRegion + "</span>.";

    document.getElementById("date").innerHTML = "Today is<b> " + localDate + "</b>.";
}

function dark() {
    let theme = document.getElementById("themeButton");
    if (theme.className == "Light") {
        theme.className = "Dark";
        theme.innerHTML = "Light";
        document.getElementById("htmlBody").style.backgroundColor = "#000";
    } else {
        load();
        theme.className = "Light";
        theme.innerHTML = "Dark";
        document.getElementById("htmlBody").style.backgroundColor = "";
    }
}
