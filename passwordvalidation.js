var myInput = document.getElementById("Skey");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
    document.getElementById("emptyPassword").style.display = "none";
    document.getElementById("emptyMail").style.display = "none";
    document.getElementById("usedMail").style.display = "none";
}
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
    document.getElementById("emptyPassword").style.display = "none";
}
var CheckPassword = false;
myInput.onkeyup = function pass() {
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        CheckPassword = true;
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        CheckPassword = false;
    }
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        CheckPassword = true;

    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
        CheckPassword = false;
    }
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        CheckPassword = true;
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
        CheckPassword = false;
    }

    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        CheckPassword = true;
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        CheckPassword = false;
    }
}