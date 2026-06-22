document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");
    const backToTop = document.getElementById("backToTop");

    // =========================
    // MOBILE MENU TOGGLE
    // =========================
    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

    // =========================
    // CLOSE MOBILE MENU ON LINK CLICK
    // =========================
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navbar.classList.contains("active")) {
                navbar.classList.remove("active");
            }

            // Active on click
            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // =========================
    // ACTIVE MENU ON SCROLL
    // =========================
    function updateActiveNavOnScroll() {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));

                const activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    window.addEventListener("scroll", updateActiveNavOnScroll);
    updateActiveNavOnScroll();

    // =========================
    // FAQ TOGGLE
    // =========================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        }
    });

    // =========================
    // BACK TO TOP BUTTON
    // =========================
    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
