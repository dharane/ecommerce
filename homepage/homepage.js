function loginFunc() {
    console.log("clicked");
    document.getElementById("WrapperCont").style.display = "flex";

}

function closeWrap() {
    console.log("wrap click")
    document.getElementById("WrapperCont").style.display = "none";
    document.getElementById("loginName").value = '';
    document.getElementById("loginKey").value = '';
    document.getElementById("emptyUsername").style.display = "none";
    document.getElementById("wrongName").style.display = "none";
    document.getElementById("wrongKey").style.display = "none";
    document.getElementById("emptyUserkey").style.display = "none";
    document.getElementById("notRegistered").style.display = "none";
    document.getElementById("closeEye").style.display = "block";
    document.getElementById("openEye").style.display = "none";
    passwordField.type = "password";


}

function FunctionLogin() {
    event.stopPropagation();
}

function signUP() {
    console.log("clicked");
    document.getElementById("myModal").style.display = "flex";

}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("Sname").value = "";
    document.getElementById("Skey").value = "";
    document.getElementById("Semail").value = "";
    document.getElementById("Sphone").value = "";
    document.getElementById("Sbd").value = "";
    document.getElementById("usedMail").style.display = "none";
    document.getElementById("emptyMail").style.display = "none";
    document.getElementById("emptyName").style.display = "none";
    document.getElementById("emptyPassword").style.display = "none";
    document.getElementById("usedName").style.display = "none";

}

function FunctionSignup() {
    event.stopPropagation();
}