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


    // FAQ
    const $faqs = $('.faq__item');

    $faqs.on('click', function(){
        $(this).children('.faq__item__answer').slideToggle();
        $(this).toggleClass('active');
    });


});