window.onload = function() {
    console.log("loaded");
}

var emailIndex = JSON.parse(localStorage.getItem('emailid'));


function submitFunction() {
    console.log("clicked");

    console.log("password..." + getPassword().password);
    document.getElementById("Submit");
    var mailvalue = document.getElementById("mailBox").value;

    console.log("email", mailvalue);
    for (i = 0; i < emailIndex.length; i++) {
        if (mailvalue === emailIndex[i].emailid) {
            var usermailName = "name:  " + emailIndex[i].name;
            var usermailPassword = "password:  " + emailIndex[i].password;
            var nameAndPassword = usermailName + "  _________________________    " + usermailPassword;

            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "gdharani.25@gmail.com",
                Password: "e32137d7-ae66-45e3-88d4-f31504938d3f",
                To: mailvalue,
                From: "gdharani.25@gmail.com",
                Subject: "This is the subject",
                Body: nameAndPassword,
            }).then(
                message => alert(message)

            );
            document.getElementById("Submit").style.display = "none";
            document.getElementById("mailSent").style.display = "block";
            // document.getElementById("mailBox").value = "";
            setTimeout(function() {
                document.getElementById("mailSent").style.display = "none";
                document.getElementById("Submit").style.display = "block";
                document.getElementById("mailBox").value = "";
            }, 2000)
        }


    }

}