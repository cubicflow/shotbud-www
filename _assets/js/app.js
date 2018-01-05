// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Make Appear
// --------------------------------------------------

$(document).ready(function () {
    const navigation = document.querySelector(".head__fixture");
    const masthead = document.querySelector(".masthead");

    navigation.classList.toggle("active");
    masthead.classList.toggle("active");
});