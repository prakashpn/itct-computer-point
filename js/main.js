(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
            // ,
            // 1200: {
            //     items: 4
            // },
            // 1400: {
            //     items: 5
            // },
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    // document.querySelector(".contact-form form").addEventListener("submit", function (e) {
    //     e.preventDefault(); // stop page reload

    //     // show success message
    //     document.getElementById("successMsg").style.display = "block";

    //     // optional: reset form fields
    //     this.reset();
    // });

    $(document).ready(function () {
        const contactForm = document.querySelector(".contact-form form");

        if (contactForm) {
            contactForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const successMsg = document.getElementById("successMsg");
                if (successMsg) {
                    successMsg.style.display = "block";
                }

                this.reset();
            });
        }
    });


    // =============================
    // Load Reusable Components
    // =============================
    $(document).ready(function () {

        function loadComponent(id, file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.innerHTML = data;
                    }
                })
                .catch(error => console.error("Error loading:", file));
        }

        loadComponent("topbar", "../components/topbar.html");
        loadComponent("navbar", "../components/navbar.html");
        loadComponent("offer", "../components/offerzone.html");
        loadComponent("footer", "../components/footer.html");

    });

    // =============================
    // Active Navbar Highlight
    // =============================
    function setActiveNav() {
        let currentPage = window.location.pathname.split("/").pop();

        if (currentPage === "") {
            currentPage = "index.html";
        }

        $(".nav-link").each(function () {
            let linkPage = $(this).attr("href");

            if (linkPage === currentPage) {
                $(".nav-link").removeClass("active");
                $(this).addClass("active");
            }
        });
    }

    // Delay because navbar loads via fetch
    setTimeout(setActiveNav, 200);


})(jQuery);

