// Smooth scrolling for anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// Activate Bootstrap carousel
$('#testimonial-carousel').carousel();

// Handle navbar toggler icon animation
$('.navbar-toggler').on('click', function () {
    $(this).find('.navbar-toggler-icon').toggleClass('active');
});
