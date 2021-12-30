$(document).ready(function() {
    $("div.specialPage").css("display", "none");
    $("div.homePage").css("display", "");
    var currDateAndTime = new Date();
    document.getElementById("dateAndTime").innerHTML = currDateAndTime.toLocaleString();
});

var pages = {1:"homePage", 2:"patientsPage", 3:"vitalsPage", 
             4:"chartsPage", 5:"labResultsPage", 6:"vitalsAlertSettingsPage",
             7:"deviceControlsPage", 8:"settingsPage", 9:"aboutPage",
             10:"contactPage", 11:"faqPage", 12:"privacyPolicyPage",
             13:"profilePage", 14:"tosPage"};

function revealPage(x) {
    var allPages = document.getElementsByClassName("specialPage");

    for (var i = 0; i < allPages.length; i++) {
        allPages[i].style.display = "none";

        if (i + 1 == x) {
            document.getElementsByClassName(pages[x])[0].style.display = "";
        }
    }
}

function showPopUp() {
    var popup = document.getElementById("infoPopup");
    popup.classList.toggle("show");
}

function showPopUp2() {
    var popup2 = document.getElementById("infoPopup2");
    popup2.classList.toggle("show");
}

function authenticationBox() {
    var codeInp = prompt("Please enter the authentication code to gain access to this patient's files:", "");

    if (codeInp == "01101") {
        revealPage(3);
    } 
    
    else {
        alert("The entered code was incorrect. Access was not granted.");
    }
}

function searchFunction() {
    var input = document.getElementById("searchInp");
    var revealer = document.getElementById("revealAllButton");
    var filter = input.value.toUpperCase();
    var entireItem = document.querySelectorAll("div.patientListItem");

    for (var i = 0; i < entireItem.length; i++) {
        var a = entireItem[i].getElementsByTagName("strong")[0]
        var b = entireItem[i].getElementsByTagName("span")[0];
        var txtValue = a.innerHTML || a.textContent || a.innerText;
        var txtValue2 = b.innerHTML || b.textContent || b.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
            entireItem[i].style.display = "";
            revealer.style.display = "none";
        }

        else {
            revealer.style.display = "";
            entireItem[i].style.display = "none";
        }
    }
}

function revealAllPatients() {
    var entireItem = document.querySelectorAll("div.patientListItem");
    var revealer = document.getElementById("revealAllButton");

    for (var i = 0; i < entireItem.length; i++) {
        entireItem[i].style.display = "";
        revealer.style.display = "none";
    }
}

var valuesVent = {1:"VT", 2:"PEEP", 3:"OXY"};
var resultVent = 0;

function increment(x) {
    resultVent = parseInt(document.getElementById(valuesVent[x]).innerText);
    resultVent = resultVent + 1;
    document.getElementById(valuesVent[x]).innerText = resultVent;
}

function decrement(x) {
    resultVent = parseInt(document.getElementById(valuesVent[x]).innerText);
    resultVent = resultVent - 1;
    document.getElementById(valuesVent[x]).innerText = resultVent;
}

$("#darkModeButton").on("click", function() {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("div.homePage").css("background-color", "#f5f5f5");
        $("div.patientsPage").css("background-color", "#f5f5f5");
        $("div.settingsPage").css("background-color", "#f5f5f5");
        $("div.aboutPage").css("background-color", "#f5f5f5");
        $("div.contactPage").css("background-color", "#f5f5f5");
        $("div.faqPage").css("background-color", "#f5f5f5");
        $("div.privacyPolicyPage").css("background-color", "#f5f5f5");
        $("div.profilePage").css("background-color", "#f5f5f5");
        $("body").css("background-color", "#e5e5e5");
        $("#commitmentStatement").css("color", "navy");
        $("#headerStrip").css("background-color", "#f5f5f5");
        $("div.footer").css("border-color", "#d6d6d6");
        $("nav").css("background-color", "white");
        $("#patientBoard").css("background-color", "white");
        $("div.patientListItem").css("color", "#6c757d");
        $("a.nav-link").css("color", "black");
        $("p.navbar-brand").css("color", "black");
        $("#darkModeButton").text("Dark Mode");
        $("#currMode").text("Dark Mode");
        $("h4.modeTitle").css("color", "black");
        $("div.settingsBox").css("background-color", "white");
    } 
    
    else {
        $("body").addClass("dark");
        $("div.homePage").css("background-color", "#222");
        $("div.patientsPage").css("background-color", "#222");
        $("div.settingsPage").css("background-color", "#222");
        $("div.aboutPage").css("background-color", "#222");
        $("div.contactPage").css("background-color", "#222");
        $("div.faqPage").css("background-color", "#222");
        $("div.privacyPolicyPage").css("background-color", "#222");
        $("div.profilePage").css("background-color", "#222");
        $("body").css("background-color", "#3b3b3b");
        $("#headerStrip").css("background-color", "#222");
        $("#commitmentStatement").css("color", "yellow");
        $("div.footer").css("border-color", "black");
        $("nav").css("background-color", "#4f4f4f");
        $("#patientBoard").css("background-color", "#878787");
        $("div.patientListItem").css("color", "#e6e6e6");
        $("a.nav-link").css("color", "#f5f5f5");
        $("p.navbar-brand").css("color", "#f5f5f5");
        $("#darkModeButton").text("Light Mode");
        $("#currMode").text("Light Mode");
        $("h4.modeTitle").css("color", "#f5f5f5");
        $("div.settingsBox").css("background-color", "#878787");
    }
});