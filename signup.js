var interObj = {
    name: '',
    password: '',
    emailid: '',
    phone: '',
    bod: ''
};

var loginInfo = {
    username: '',
    password: ''
};
var storedKey = document.getElementById("loginKey").value;
var storedName = document.getElementById("loginName").value;
var localArray = localStorage.getItem(interObj.emailid) !== undefined && localStorage.getItem(interObj.emailid) !== null ?
    JSON.parse(localStorage.getItem(interObj.emailid)) : [];

function personDetails() {
    event.preventDefault();
    event.stopPropagation();
    var nameVal = document.getElementById("Sname");
    var keyVal = document.getElementById("Skey");
    var mailVal = document.getElementById("Semail");
    var phoneVal = document.getElementById("Sphone");
    var bodVal = document.getElementById("Sbd");
    var interObj = {
        name: nameVal.value,
        password: keyVal.value,
        emailid: mailVal.value,
        phone: phoneVal.value,
        bod: bodVal.value
    };

    var checkMail = localStorage.getItem(interObj.emailid) !== undefined && localStorage.getItem(interObj.emailid) !== null ?
        JSON.parse(localStorage.getItem(interObj.emailid)) : [];
    var validError = {
        username: false,
        email: false
    };
    var blankEmail = false;
    var blankName = false;
    var blankPassword = false;
    for (var i = 0; i < checkMail.length; i++) {
        if (mailVal.value === checkMail[i].emailid) {
            validError['email'] = true;
        } else if (nameVal.value === checkMail[i].name) {
            validError['username'] = true;
        } else if (mailVal.value === "") {
            blankEmail = true;
        } else if (nameVal.value === "") {
            blankName = true;
        } else if (keyVal.value === "") {
            blankPassword = true;
        }
    }
    mailVal.onfocus = function() {
        document.getElementById("emptyMail").style.display = "none";
        document.getElementById("usedMail").style.display = "none";
    }
    nameVal.onfocus = function() {
        document.getElementById("emptyName").style.display = "none";
        document.getElementById("usedName").style.display = "none";
    }

    if (blankPassword) {
        document.getElementById("emptyPassword").style.display = "block";
    } else {
        document.getElementById("emptyPassword").style.display = "none";
    }

    if (blankName) {
        document.getElementById("emptyName").style.display = "block";
    } else {
        document.getElementById("emptyName").style.display = "none";
    }

    if (blankEmail) {
        document.getElementById("emptyMail").style.display = "block";
    } else {
        document.getElementById("emptyMail").style.display = "none";
    }

    if (validError['email']) {
        document.getElementById("usedMail").style.display = "block";
    } else {
        document.getElementById("usedMail").style.display = "none";
    }
    if (validError['username']) {
        document.getElementById("usedName").style.display = "block";
    } else {
        document.getElementById("usedName").style.display = "none";
    }
    if (!validError['email'] && !validError['username'] && !blankEmail && !blankName && !blankPassword) {


        document.getElementById("accountCreated").style.display = "block";
        document.getElementById("signupDetails").style.display = "none";

        letter.classList.remove("valid");
        letter.classList.add("invalid");
        capital.classList.remove("valid");
        capital.classList.add("invalid");
        length.classList.remove("valid");
        length.classList.add("invalid");
        number.classList.remove("valid");
        number.classList.add("invalid");

        var localArray = localStorage.getItem(interObj.emailid) !== undefined && localStorage.getItem(interObj.emailid) !== null ?
            JSON.parse(localStorage.getItem(interObj.emailid)) : [];
        localArray.push(interObj);
        localStorage.setItem(interObj.emailid, JSON.stringify(localArray));
        console.log('local value', localArray);
        document.getElementById("Sname").value = '';
        document.getElementById("Skey").value = '';
        document.getElementById("Semail").value = '';
        document.getElementById("Sphone").value = '';
        document.getElementById("Sbd").value = '';
        setTimeout(function() {
            document.getElementById("signupDetails").style.display = "block";
            document.getElementById("accountCreated").style.display = "none";
            document.getElementById("myModal").style.display = "none";
        }, 2000)
    }

}