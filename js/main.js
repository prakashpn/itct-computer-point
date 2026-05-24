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
        loadComponent("result", "../components/result.html");
        loadComponent("footer", "../components/footer.html");
        loadComponent("achievement", "../components/achievement.html");

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


    // Show popup after 1.5 seconds
    // window.addEventListener("load", function () {
    //     setTimeout(function () {
    //         document.getElementById("plusPopup").style.display = "block";
    //     }, 1500);
    // });

    // Show popup after 1.5 seconds (SAFE VERSION)
    window.addEventListener("load", function () {
        const popup = document.getElementById("plusPopup");

        if (popup) {   // ✅ check if element exists
            setTimeout(function () {
                popup.style.display = "block";
            }, 1500);
        }
    });

    // Close popup
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("close-popup")) {
            document.getElementById("plusPopup").style.display = "none";
        }
    });

    //=================== event image ==========================
    // ================= Lightbox Safe Version =================

    const eventImages = {
        result: ["img/Result1.jpeg", "img/Result2.jpeg", "img/Result3.jpeg", "img/Place1.jpeg", "img/Place2.jpeg", "img/Place3.jpeg", "img/result.jpeg", "img/result_2.jpeg"],
        annual: ["img/event1.jpg", "img/event9.jpg", "img/event3.jpg"],
        prise: ["img/prise.jpeg"],
        workshop: ["img/newspaaper1.jpeg", "img/meet1.jpeg", "img/meet2.jpeg", "img/meet3.jpeg", "img/admission.jpeg", "img/admission2.jpeg", "img/admission3.jpeg",
            "img/admission4.jpeg", "img/admission5.jpeg", "img/admission6.jpeg"]
    };

    let currentImages = [];
    let currentIndex = 0;

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const closeBtn = document.querySelector(".close-lightbox");

    // Open lightbox
    document.querySelectorAll(".event-img").forEach(img => {
        img.addEventListener("click", function () {
            const eventName = this.getAttribute("data-event");
            currentImages = eventImages[eventName] || [];
            currentIndex = 0;

            if (lightbox && lightboxImg && currentImages.length > 0) {
                showImage();
                lightbox.style.display = "flex";
            }
        });
    });

    function showImage() {
        if (lightboxImg && currentImages.length > 0) {
            lightboxImg.src = currentImages[currentIndex];
        }
    }

    // Next
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % currentImages.length;
            showImage();
        });
    }

    // Prev
    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            showImage();
        });
    }

    // Close
    if (closeBtn && lightbox) {
        closeBtn.addEventListener("click", function () {
            lightbox.style.display = "none";
        });
    }

    document.addEventListener("keydown", function (e) {
        if (!lightbox || !lightboxImg || currentImages.length === 0) return;
        const isVisible = window.getComputedStyle(lightbox).display === "flex";
        if (!isVisible) return;
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % currentImages.length;
            showImage();
        }

        if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            showImage();
        }

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    });



    //=================== event image  END==========================


    // ================= RESULT IMAGE POPUP =================
    document.addEventListener("click", function (e) {
        // Open popup
        if (e.target.classList.contains("result-img")) {
            const resultModal = document.getElementById("imageModal");
            const resultModalImg = document.getElementById("popupImage");
            if (resultModal && resultModalImg) {
                resultModal.style.display = "block";
                resultModalImg.src = e.target.src;
            }
        }

        // Close popup button
        if (e.target.classList.contains("close-modal")) {
            document.getElementById("imageModal").style.display = "none";
        }

        // Close outside image
        if (e.target.id === "imageModal") {
            document.getElementById("imageModal").style.display = "none";
        }
    });


    // ESC key close
    document.addEventListener("keydown", function (e) {
        const resultModal = document.getElementById("imageModal");
        if (!resultModal) return;
        const isVisible =
            window.getComputedStyle(resultModal).display === "block";
        if (e.key === "Escape" && isVisible) {
            resultModal.style.display = "none";
        }
    });

    window.toggleLanguage = function () {

        const odia = document.getElementById("odiaContent");
        const english = document.getElementById("englishContent");
        const btn = document.getElementById("langToggleBtn");

        if (odia.style.display !== "none") {

            odia.style.display = "none";
            english.style.display = "block";
            btn.innerText = "ଓଡ଼ିଆରେ ଦେଖନ୍ତୁ";

        } else {

            odia.style.display = "block";
            english.style.display = "none";
            btn.innerText = "Convert to English";
        }
    };

    // function toggleLanguage() {

    //     const odia = document.getElementById("odiaContent");
    //     const english = document.getElementById("englishContent");
    //     const btn = document.getElementById("langToggleBtn");

    //     if (odia.style.display !== "none") {

    //         odia.style.display = "none";
    //         english.style.display = "block";
    //         btn.innerText = "ଓଡ଼ିଆରେ ଦେଖନ୍ତୁ";

    //     } else {

    //         odia.style.display = "block";
    //         english.style.display = "none";
    //         btn.innerText = "Convert to English";
    //     }
    // }

})(jQuery);

