document.getElementById("loginButton").onclick = function() {
    retrieve();
};
        
function loginFunc() {
    window.location.href = "Home.html";
}

function retrieve() {
    var JSONObject = localStorage.getItem("localDB");
    var JSObject = JSON.parse(JSONObject);
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value;

    if (JSObject[userEmail] != null && JSObject[userEmail].PASS == userPass && userEmail != null) {
        document.getElementById("message").innerHTML = "Login successful!";
        window.location.href = "Home.html";
    }

    else {
        document.getElementById("message").innerHTML = "Your account was not found. Please try again!";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputPassword").value = "";
    }
}