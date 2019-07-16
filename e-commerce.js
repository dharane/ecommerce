// function loginFunc() {
//     console.log("clicked");
//     document.getElementById("WrapperCont").style.display = "flex";

// }

// function closeWrap() {
//     console.log("wrap click")
//     document.getElementById("WrapperCont").style.display = "none";
//     document.getElementById("loginName").value = '';
//     document.getElementById("loginKey").value = '';
//     document.getElementById("emptyUsername").style.display = "none";
//     document.getElementById("wrongName").style.display = "none";
//     document.getElementById("wrongKey").style.display = "none";
//     document.getElementById("emptyUserkey").style.display = "none";
//     document.getElementById("notRegistered").style.display = "none";
//     document.getElementById("closeEye").style.display = "block";
//     document.getElementById("openEye").style.display = "none";
//     passwordField.type = "password";


// }

// function FunctionLogin() {
//     event.stopPropagation();
// }

// function signUP() {
//     console.log("clicked");
//     document.getElementById("myModal").style.display = "flex";

// }

// function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//     document.getElementById("Sname").value = "";
//     document.getElementById("Skey").value = "";
//     document.getElementById("Semail").value = "";
//     document.getElementById("Sphone").value = "";
//     document.getElementById("Sbd").value = "";
//     document.getElementById("usedMail").style.display = "none";
//     document.getElementById("emptyMail").style.display = "none";
//     document.getElementById("emptyName").style.display = "none";
//     document.getElementById("emptyPassword").style.display = "none";
//     document.getElementById("usedName").style.display = "none";

// }

// function FunctionSignup() {
//     event.stopPropagation();
// }



// var interObj = {
//     name: '',
//     password: '',
//     emailid: '',
//     phone: '',
//     bod: ''
// };

// var loginInfo = {
//     username: '',
//     password: ''
// };
// var storedKey = document.getElementById("loginKey").value;
// var storedName = document.getElementById("loginName").value;
// var localArray = localStorage.getItem(interObj.emailid) !== undefined && localStorage.getItem(interObj.emailid) !== null ?
//     JSON.parse(localStorage.getItem(interObj.emailid)) : [];

// function personDetails() {
//     event.preventDefault();
//     event.stopPropagation();
//     var nameVal = document.getElementById("Sname");
//     var keyVal = document.getElementById("Skey");
//     var mailVal = document.getElementById("Semail");
//     var phoneVal = document.getElementById("Sphone");
//     var bodVal = document.getElementById("Sbd");
//     var interObj = {
//         name: nameVal.value,
//         password: keyVal.value,
//         emailid: mailVal.value,
//         phone: phoneVal.value,
//         bod: bodVal.value
//     };

//     var checkMail = localStorage.getItem(interObj.emailid) !== undefined && localStorage.getItem(interObj.emailid) !== null ?
//         JSON.parse(localStorage.getItem(interObj.emailid)) : [];
//     var validError = {
//         username: false,
//         email: false
//     };
//     var blankEmail = false;
//     var blankName = false;
//     var blankPassword = false;
//     for (var i = 0; i < checkMail.length; i++) {
//         if (mailVal.value === checkMail[i].emailid) {
//             validError['email'] = true;
//         } else if (nameVal.value === checkMail[i].name) {
//             validError['username'] = true;
//         } else if (mailVal.value === "") {
//             blankEmail = true;
//         } else if (nameVal.value === "") {
//             blankName = true;
//         } else if (keyVal.value === "") {
//             blankPassword = true;
//         }
//     }
//     mailVal.onfocus = function() {
//         document.getElementById("emptyMail").style.display = "none";
//         document.getElementById("usedMail").style.display = "none";
//     }
//     nameVal.onfocus = function() {
//         document.getElementById("emptyName").style.display = "none";
//         document.getElementById("usedName").style.display = "none";
//     }

//     if (blankPassword) {
//         document.getElementById("emptyPassword").style.display = "block";
//     } else {
//         document.getElementById("emptyPassword").style.display = "none";
//     }

//     if (blankName) {
//         document.getElementById("emptyName").style.display = "block";
//     } else {
//         document.getElementById("emptyName").style.display = "none";
//     }

//     if (blankEmail) {
//         document.getElementById("emptyMail").style.display = "block";
//     } else {
//         document.getElementById("emptyMail").style.display = "none";
//     }

//     if (validError['email']) {
//         document.getElementById("usedMail").style.display = "block";
//     } else {
//         document.getElementById("usedMail").style.display = "none";
//     }
//     if (validError['username']) {
//         document.getElementById("usedName").style.display = "block";
//     } else {
//         document.getElementById("usedName").style.display = "none";
//     }
//     if (!validError['email'] && !validError['username'] && !blankEmail && !blankName && !blankPassword && CheckPassword) {


//         document.getElementById("accountCreated").style.display = "block";
//         document.getElementById("signupDetails").style.display = "none";

//         letter.classList.remove("valid");
//         letter.classList.add("invalid");
//         capital.classList.remove("valid");
//         capital.classList.add("invalid");
//         length.classList.remove("valid");
//         length.classList.add("invalid");
//         number.classList.remove("valid");
//         number.classList.add("invalid");

//         var localArray = localStorage.getItem(interObj.emailid) !== undefined && localStorage.getItem(interObj.emailid) !== null ?
//             JSON.parse(localStorage.getItem(interObj.emailid)) : [];
//         localArray.push(interObj);
//         localStorage.setItem(interObj.emailid, JSON.stringify(localArray));
//         console.log('local value', localArray);
//         document.getElementById("Sname").value = '';
//         document.getElementById("Skey").value = '';
//         document.getElementById("Semail").value = '';
//         document.getElementById("Sphone").value = '';
//         document.getElementById("Sbd").value = '';
//         setTimeout(function() {
//             document.getElementById("signupDetails").style.display = "block";
//             document.getElementById("accountCreated").style.display = "none";
//             document.getElementById("myModal").style.display = "none";
//         }, 2000)
//     }

// }

// function authenticateFun() {
//     var storedName = document.getElementById("loginName").value;
//     var storedKey = document.getElementById("loginKey").value;
//     document.getElementById("LoginBtn").style.display = "block";
//     console.log(storedName, storedKey);
//     var fetchedVal = JSON.parse(localStorage.getItem('emailid'));
//     var loginError = {
//         loginname: false,
//         loginkey: false,
//         loginsuccess: false,
//         loginfail: false
//     };
//     var emptyloginName = false;
//     var emptyloginKey = false;

//     var nameFocus = document.getElementById("loginName");
//     var keyFocus = document.getElementById("loginKey");
//     nameFocus.onfocus = function() {
//         document.getElementById("notRegistered").style.display = "none";
//         document.getElementById("wrongName").style.display = "none";
//         document.getElementById("emptyUsername").style.display = "none";
//     }
//     keyFocus.onfocus = function() {
//         document.getElementById("notRegistered").style.display = "none";
//         document.getElementById("wrongKey").style.display = "none";
//         document.getElementById("emptyUserkey").style.display = "none";
//     }

//     for (var i = 0; i < fetchedVal.length; i++) {
//         if (storedName === fetchedVal[i].name && storedKey === fetchedVal[i].password && storedName !== "admin" && storedKey !== "Admin@25") {
//             loginError['loginsuccess'] = true;
//             loginError['loginkey'] = false;
//             loginError['loginfail'] = false;
//             loginError['loginname'] = false;
//             break;
//         } else if (storedName === fetchedVal[i].name && storedKey !== fetchedVal[i].password) {
//             console.log('name found');
//             loginError['loginkey'] = true;
//             loginError['loginfail'] = false;
//             loginError['loginname'] = false;
//             loginError['loginsuccess'] = false;
//             break;
//         } else if (storedName !== fetchedVal[i].name && storedKey !== fetchedVal[i].password && storedName !== "" && storedKey !== "" && storedName !== "admin" && storedKey !== "Admin@25") {
//             loginError['loginfail'] = true;
//             loginError['loginname'] = false;
//             loginError['loginsuccess'] = false;
//             loginError['loginkey'] = false;
//         } else if (storedName === "") {
//             emptyloginName = true;
//             break;
//         } else if (storedKey === "") {
//             emptyloginKey = true;
//             break;
//         } else if (storedName !== fetchedVal[i].name && storedKey === fetchedVal[i].password) {
//             loginError['loginname'] = true;
//             loginError['loginsuccess'] = false;
//             loginError['loginkey'] = false;
//             loginError['loginfail'] = false;
//             break;
//         }

//     }

//     //admin login

//     if (storedName === "admin" && storedKey === "Admin@25") {
//         document.getElementById("accountDetails").style.display = "none";
//         document.getElementById("CreateAccount").style.display = "none";
//         document.getElementById("adminLoggin").style.display = "block";
//         document.getElementById("Product").style.display = "block";
//         document.getElementById("LoginBtn").style.display = "none";
//         setTimeout(function() {
//             document.getElementById("LoginBtn").style.display = "block";
//             document.getElementById("adminLoggin").style.display = "none";
//             document.getElementById("WrapperCont").style.display = "none";
//         }, 2000)
//         document.getElementById("loginName").value = '';
//         document.getElementById("loginKey").value = '';
//         document.getElementById("emptyUsername").style.display = "none";
//         document.getElementById("wrongName").style.display = "none";
//         document.getElementById("wrongKey").style.display = "none";
//         document.getElementById("emptyUserkey").style.display = "none";
//         document.getElementById("notRegistered").style.display = "none";
//         document.getElementById("closeEye").style.display = "block";
//         document.getElementById("openEye").style.display = "none";
//         passwordField.type = "password";
//         document.getElementById("logOut").style.display = "block";
//         document.getElementById("Login").style.display = "none";


//     }

//     //login success

//     if (loginError['loginsuccess']) {
//         document.getElementById("wrongName").style.display = "none";
//         document.getElementById("userProducts").style.display = "block";
//         document.getElementById("wrongKey").style.display = "none";
//         document.getElementById("accountDetails").style.display = "block";
//         document.getElementById("CreateAccount").style.display = "none";
//         document.getElementById("logOut").style.display = "block";
//         document.getElementById("Login").style.display = "none";
//         document.getElementById("loginName").value = '';
//         document.getElementById("loginKey").value = '';
//         document.getElementById("LoginBtn").style.display = "none";
//         document.getElementById("loginSucess").style.display = "block";
//         setTimeout(function() {
//             document.getElementById("LoginBtn").style.display = "block";
//             document.getElementById("loginSucess").style.display = "none";
//             document.getElementById("WrapperCont").style.display = "none";
//         }, 2000)
//         loginInfo = {
//             username: storedName,
//             password: storedKey,
//         };
//     }
//     if (emptyloginName) {
//         document.getElementById("emptyUsername").style.display = "block";
//     }

//     if (emptyloginKey) {
//         document.getElementById("emptyUserkey").style.display = "block";
//     }
//     if (loginError['loginname']) {
//         document.getElementById("wrongName").style.display = "block";
//         console.log('login username error');
//         storedName.onfocus = function() {
//             document.getElementById("wrongName").style.display = "none";
//         }
//     }
//     if (loginError['loginkey']) {
//         document.getElementById("wrongKey").style.display = "block"
//         console.log('login password error');

//     }
//     if (loginError['loginfail']) {
//         console.log('login failed');
//         document.getElementById("notRegistered").style.display = "block";
//         document.getElementById("wrongKey").style.display = "none";
//         document.getElementById("wrongName").style.display = "none";
//     }
// }

// function AccountDetails() {
//     document.getElementById("heroContainer").style.display = "none";
//     document.getElementById("accountContainer").style.display = "block"
// }

// function newPassword() {
//     document.getElementById("changePassword").style.display = "block";
// }
// // to change password

// var currentIndex;

// function passwordChangeBtn() {
//     var oldpassword = document.getElementById("oldKey").value;
//     var newpasswordValue = document.getElementById("newKey").value;
//     var confirmpassword = document.getElementById("confirmKey").value;
//     currentIndex = -1;
//     if (newpasswordValue === confirmpassword && oldpassword === loginInfo['password'] && oldpassword !== newpasswordValue) {
//         document.getElementById("newPass").style.display = "block";
//         document.getElementById("passwordBtn").style.display = "none";

//         //running loop to know the index of the object for which the password is to be changed.
//         for (var i = 0; i < localArray.length; i++) {
//             if (localArray[i]['password'] === loginInfo['password']) {
//                 currentIndex = i; //index of the object. In that object we have to replace the password.
//             }
//         }
//         console.log(currentIndex);
//         console.log(newpasswordValue);

//         localArray[currentIndex]['password'] = newpasswordValue; //replacing the old password which is the local array with the new password
//         document.getElementById("oldKey").value = "";
//         document.getElementById("newKey").value = "";
//         document.getElementById("confirmKey").value = "";
//         setTimeout(function() {
//             document.getElementById("passwordBtn").style.display = "block";
//             document.getElementById("newPass").style.display = "none";
//             document.getElementById("changePassword").style.display = "none";
//         }, 2000)

//     }

//     localStorage.setItem('emailid', JSON.stringify(localArray)); //in localstorage we r making changes by replacing the old password with new one

//     if (oldpassword !== loginInfo['password']) {
//         document.getElementById("wrongPass").style.display = "block";

//     } else {
//         document.getElementById("wrongPass").style.display = "none";
//     }
//     if (oldpassword === newpasswordValue && oldpassword === loginInfo['password']) {
//         document.getElementById("sameOldpassword").style.display = "block";
//     } else {
//         document.getElementById("sameOldpassword").style.display = "none";
//     }
//     if (newpasswordValue !== confirmpassword) {

//         document.getElementById("wrongMatch").style.display = "block";

//     } else {
//         document.getElementById("wrongMatch").style.display = "none";
//     }
// }

// function logout() {
//     if (confirm("are you sure u want to logout!")) {
//         document.getElementById("heroContainer").style.display = "block";
//         document.getElementById("logOut").style.display = "none";
//         document.getElementById("Login").style.display = "block";
//         document.getElementById("accountDetails").style.display = "none";
//         document.getElementById("CreateAccount").style.display = "block";
//         document.getElementById("addProductContainer").style.display = "none";
//         document.getElementById("Product").style.display = "none";

//     } else {
//         console.log("You pressed Cancel!");
//     }
// }

// //regular expression checking for password

// var myInput = document.getElementById("Skey");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");
// myInput.onfocus = function() {
//     document.getElementById("message").style.display = "block";
//     document.getElementById("emptyPassword").style.display = "none";
//     document.getElementById("emptyMail").style.display = "none";
//     document.getElementById("usedMail").style.display = "none";
// }
// myInput.onblur = function() {
//     document.getElementById("message").style.display = "none";
//     document.getElementById("emptyPassword").style.display = "none";
// }
// var CheckPassword = false;
// myInput.onkeyup = function pass() {
//     var lowerCaseLetters = /[a-z]/g;
//     if (myInput.value.match(lowerCaseLetters)) {
//         letter.classList.remove("invalid");
//         letter.classList.add("valid");
//         CheckPassword = true;
//     } else {
//         letter.classList.remove("valid");
//         letter.classList.add("invalid");
//         CheckPassword = false;
//     }
//     var upperCaseLetters = /[A-Z]/g;
//     if (myInput.value.match(upperCaseLetters)) {
//         capital.classList.remove("invalid");
//         capital.classList.add("valid");
//         CheckPassword = true;

//     } else {
//         capital.classList.remove("valid");
//         capital.classList.add("invalid");
//         CheckPassword = false;
//     }
//     var numbers = /[0-9]/g;
//     if (myInput.value.match(numbers)) {
//         number.classList.remove("invalid");
//         number.classList.add("valid");
//         CheckPassword = true;
//     } else {
//         number.classList.remove("valid");
//         number.classList.add("invalid");
//         CheckPassword = false;
//     }

//     if (myInput.value.length >= 8) {
//         length.classList.remove("invalid");
//         length.classList.add("valid");
//         CheckPassword = true;
//     } else {
//         length.classList.remove("valid");
//         length.classList.add("invalid");
//         CheckPassword = false;
//     }

// }
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//     console.log("clicked on cancel button");
//     document.getElementById("changePassword").style.display = "none";
//     document.getElementById("oldKey").value = "";
//     document.getElementById("newKey").value = "";
//     document.getElementById("confirmKey").value = "";
//     document.getElementById("sameOldpassword").style.display = "none";
//     document.getElementById("wrongMatch").style.display = "none";
//     document.getElementById("wrongPass").style.display = "none";

// }
// var spanUser = document.getElementsByClassName("close-user")[0];
// spanUser.onclick = function() {
//     document.getElementById("changeName").style.display = "none";
// }
// var spanDetails = document.getElementsByClassName("close-details")[0];
// spanDetails.onclick = function() {
//     console.log("clicked on cancel button");
//     document.getElementById("detailsOfPerson").style.display = "none";
// }
// var indexValue;

// function newUserName() {
//     document.getElementById("changeName").style.display = "block";
//     document.getElementById("newName").value = loginInfo['username'];
//     togetIndexposition();
//     console.log(indexValue);
//     document.getElementById("newMail").value = indexValue.emailid;
// }

// function detailsChangeBtn() {
//     var newUser = document.getElementById('newName').value;
//     indexValue.name = newUser;
//     var newGmail = document.getElementById('newMail').value;
//     indexValue.emailid = newGmail;

//     localStorage.setItem('emailid', JSON.stringify(localArray));

// }

// function detailsofAccount() {
//     document.getElementById("detailsOfPerson").style.display = "block";
//     togetIndexposition();
//     document.getElementById("personName").innerHTML = "Username  :    " + indexValue.name;
//     document.getElementById("personEmail").innerHTML = "Email Address  :   " + indexValue.emailid;
//     document.getElementById("personPhone").innerHTML = "Phone number  :   " + indexValue.phone;
//     document.getElementById("personDob").innerHTML = "Date Of Birth  :   " + indexValue.bod;

// }

// function togetIndexposition() {
//     var indexPosition = -1;
//     for (var i = 0; i < localArray.length; i++) {

//         if (localArray[i]['name'] === loginInfo['username']) {
//             indexPosition = i;
//         }

//     }
//     indexValue = localArray[indexPosition];
// }
// var passwordField = document.getElementById("loginKey")

// function showpasswordFunction() {
//     document.getElementById("closeEye").style.display = "none";
//     document.getElementById("openEye").style.display = "block";
//     passwordField.type = "text";
// }

// function hidepasswordFunction() {
//     document.getElementById("closeEye").style.display = "block";
//     document.getElementById("openEye").style.display = "none";
//     passwordField.type = "password";
// }
// var productObj = {
//     id: '',
//     name: '',
//     info: '',
//     price: '',
//     url: ''
// };
// var productArray;


// function addProduct() {
//     document.getElementById("addBtn");
//     var proId = document.getElementById("AddProductId").value;
//     console.log(proId);
//     var proName = document.getElementById("AddProductName").value;
//     var proInfo = document.getElementById("AddProductInfo").value;
//     var proPrice = document.getElementById("AddProductPrice").value;
//     var proUrl = document.getElementById("AddProductPath").value;

//     var productObj = {
//         id: proId,
//         name: proName,
//         info: proInfo,
//         price: proPrice,
//         url: proUrl
//     };

//     productArray = localStorage.getItem('productss') !== undefined && localStorage.getItem('productss') !== null ?
//         JSON.parse(localStorage.getItem('productss')) : [];
//     productArray.push(productObj);
//     localStorage.setItem('productss', JSON.stringify(productArray));
//     console.log('local value', productArray);
// }

// function adminaddProducts() {
//     document.getElementById("addProductContainer").style.display = "block";
//     document.getElementById("heroContainer").style.display = "none";
// }



// // function seeProducts() {


// //     var iterateProduct = JSON.parse(localStorage.getItem('productss'));

// //     document.getElementById("productsContainer").style.display = "block";
// //     document.getElementById("heroContainer").style.display = "none";
// //     var nameOfProduct = document.getElementById("AddProductName").value;
// //     for (var i = 0; i < iterateProduct.length; i++) {
// //         // document.getElementById("UserproductName").innerHTML = "name  :    " + iterateProduct[i].name;
// //         var seeBox = document.getElementById("SeeBox");
// //         var boxIterator = document.createElement("productBox");
// //         // boxIterator.style.boxShadow = "  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)";
// //         boxIterator.style.width = "300px";
// //         boxIterator.style.height = " 350px";
// //         // boxIterator.style.margin_top = " 50px";
// //         // boxIterator.style.margin_left = "30px";
// //         seeBox.appendChild(boxIterator);
// //         var productIterator = document.getElementById("productsContainer");
// //         productIterator.appendChild(seeBox);


// //     }



// // }
// // function seeProducts() {


// //     var iterateProduct = JSON.parse(localStorage.getItem('productss'));


// //     document.getElementById("productsContainer").style.display = "block";
// //     document.getElementById("heroContainer").style.display = "none";
// //     for (var i = 0; i < iterateProduct.length; i++) {
// //         document.getElementById("SeeBox").innerHTML = `<div class="product-box">
// //          <div class="user-product-image" id="UserproductImage">

// //          </div>
// //          <div class="user-product-name" id="UserproductName">
// //          ${iterateProduct[i].name}
// //          </div>
// //          <div class="user-product-id" id="UserproductId">

// //          </div>
// //          <div class="user-product-description" id="UserproductInfp">

// //          </div>
// //          <div class="user-product-price" id="UserproductPrice">

// //          </div>
// //          </div>`
// //     }
// // }