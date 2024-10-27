// Smooth Scrolling Effect
$(document).ready(function () {
    $('.nav-link').click(function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        const target = $(this).attr('href');

        // Smooth scroll to the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70 // Adjust for navbar height
        }, 800);
    });
});

// Navbar Background Change on Scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('bg-dark');
    } else {
        $('.navbar').removeClass('bg-dark');
    }
});
