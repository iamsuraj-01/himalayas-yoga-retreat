(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate The wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    // Whatsapp Button
    document.addEventListener("DOMContentLoaded", function() {
        var whatsappLink = document.getElementById("whatsapp-link");
        var phoneNumber = "916395525749"; // Your WhatsApp number
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile devices
            whatsappLink.href = "https://wa.me/" + phoneNumber;
        } else {
            // Desktop devices
            whatsappLink.href = "https://web.whatsapp.com/send?phone=" + phoneNumber;
        }
    });


    // Testimonial Slider
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Vendor Slider
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });

    // Gallery Slider
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,             // Enable auto play
        pause: 2000,            // Time in milliseconds between slides
        speed: 700,             // Speed of the slide transition
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        }
    });

    // Registration Form Submission
    $(document).ready(function() {
        $("#registrationForm").on("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission

            const fullName = $("input[name='fullName']").val();
            const gender = $("select[name='gender']").val();
            const contactNo = $("input[name='contactNo']").val();
            const email = $("input[name='email']").val();
            const country = $("input[name='country']").val();
            const dob = $("input[name='dob']").val();
            const courseProgram = $("select[name='courseProgram']").val();
            const accommodation = $("select[name='accommodation']").val();
            const message = $("textarea[name='message']").val();

            // Create an array for the message lines
            const messageLines = [
                `Registration Information:`,
                `Full Name: ${fullName}`,
                `Gender: ${gender}`,
                `Contact No: ${contactNo}`,
                `Email: ${email}`,
                `Country: ${country}`,
                `Date of Birth: ${dob}`,
                `Course Program: ${courseProgram}`,
                `Accommodation: ${accommodation}`,
                `Message: ${message}`
            ];

            // Join the message lines with line breaks
            const mailMessage = messageLines.join('%0D%0A'); // '%0D%0A' is the URL-encoded line break for mailto links

            // Construct mailto link
            const mailtoLink = `mailto:vikashnawani999@gmail.com?subject=Registration Request from ${fullName}&body=${mailMessage}`;

            // Open the user's default email client
            window.location.href = mailtoLink;

            // Show Thank You Modal
            $("#thankYouModal").modal('show');
        });
    });

    
})(jQuery);

