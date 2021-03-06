// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Make Appear
// --------------------------------------------------

$(document).ready(function () {
    const navigation = document.querySelector(".head__fixture");
    const masthead = document.querySelector(".masthead");
    
    const navButton = document.querySelector(".nav-button");
	const sidebar = document.querySelector(".sidebar");
	const fixture = document.querySelector(".head__fixture");
    const pageContent = document.querySelector(".content");
    
    const imgSwapOptions = {
        responsiveClass: '.cf-responsive',
        mediumSuffix: '--medium',
        addMediumSuffix: false,
        largeSuffix: '--large',
        addLargeSuffix: false,
        addRetinaSuffix: true,
        retinaSuffix: '@2x',
        smallBrowserWidth: 600,
        mediumBrowserWidth: 1023,
        largeBrowserWidth: 1280
    };
    const responsiveImages = cf.imgSwap(imgSwapOptions);

    navigation.classList.toggle("appear");
    masthead.classList.toggle("appear");


    // FAQ
    const $faqs = $('.faq__item');

    $faqs.on('click', function(){
        $(this).children('.faq__item__answer').slideToggle();
        $(this).toggleClass('active');
    });



    // Smooth scroll anchors
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        // Hide mobile nav if shown
        navButton.classList.remove("active");
		sidebar.classList.remove("active");
		fixture.classList.remove("active");
		pageContent.classList.remove("active");

        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });


});