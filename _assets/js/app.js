// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Make Appear
// --------------------------------------------------

$(document).ready(function () {
    const navigation = document.querySelector(".head__fixture");
    const masthead = document.querySelector(".masthead");

    navigation.classList.toggle("appear");
    masthead.classList.toggle("appear");
});