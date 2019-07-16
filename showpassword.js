var passwordField = document.getElementById("loginKey")

function showpasswordFunction() {
    document.getElementById("closeEye").style.display = "none";
    document.getElementById("openEye").style.display = "block";
    passwordField.type = "text";
}

function hidepasswordFunction() {
    document.getElementById("closeEye").style.display = "block";
    document.getElementById("openEye").style.display = "none";
    passwordField.type = "password";
}