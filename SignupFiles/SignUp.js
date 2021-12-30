document.getElementById("signupButton").onclick = function() { 
    save();
};

var db = {};

function save() {
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value;
    var userPass_2 = document.getElementById("inputPasswordAgain").value;
    var tofSCheckbox = document.getElementById("TofS").checked;
    db[userEmail] = {EMAIL:userEmail, PASS:userPass, PASS_2:userPass_2};
    var JSONObject = JSON.stringify(db);

    localStorage.setItem("localDB", JSONObject);

    if (userPass != userPass_2) {
        document.getElementById("message").innerHTML = "Passwords do not match!";
    }

    else if (userEmail.length == 0 || userPass.length == 0 || userPass_2.length == 0 || tofSCheckbox == false) {
        document.getElementById("message").innerHTML = "Enter the required information first!";
    }

    else if (validateEmail(userEmail) == false) {
        document.getElementById("message").innerHTML = "Please enter a proper email address!";
    }

    else if (db[userEmail] != null && validateEmail(userEmail) == true) {
        document.getElementById("message").innerHTML = "You already have an account!";
    }

    else {
        document.getElementById("message").innerHTML = "Your account has been created!";
        console.log(db);
        console.log(JSONObject);
        window.location.href = "Home.html";
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}