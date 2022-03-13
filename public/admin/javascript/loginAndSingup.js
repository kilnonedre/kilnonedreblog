var signIn = document.getElementById("signIn");
var signUp = document.getElementById("signUp");
var loginAndSignupBox = document.getElementById("loginAndSignupBox");
var loginAndSignupBoxInside = document.getElementsByClassName('loginAndSignupBoxInside');
var loginAndSignupBoxBack = document.getElementsByClassName('loginAndSignupBox');
var body = document.getElementsByTagName('body');

signUp.addEventListener('click', function() {
    loginAndSignupBox.style.left = "450px";
    loginAndSignupBox.style.transition = "0.5s";
    loginAndSignupBoxInside[0].style.marginLeft = "-450px";
    loginAndSignupBoxInside[0].style.transition = "0.5s";
    body[0].style.backgroundColor = "#cd4762";
    body[0].style.transition = "0.5s";
    loginAndSignupBoxBack[0].style.backgroundColor = "#d96c83";
    loginAndSignupBoxBack[0].transition = "0.5s";
});

signIn.addEventListener('click', function() {
    loginAndSignupBox.style.left = "0";
    loginAndSignupBoxInside[0].style.marginLeft = "0";
    body[0].style.backgroundColor = "#05a8f4";
    loginAndSignupBoxBack[0].style.backgroundColor = "#36bbf6";
});