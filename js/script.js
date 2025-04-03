/*document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-menu a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            // Check if the link is an internal section (starts with #)
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            } 
            // Else, allow normal navigation for external pages
        });
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for internal navigation
    document.querySelectorAll(".nav-menu a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            // Check if the link is an internal section (starts with #)
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            } 
            // Else, allow normal navigation for external pages
        });
    });

    // Slideshow for project images
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 5 seconds
    }

    // Initialize the slideshow once DOM is ready
    showSlides();
});

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    

        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 4000); // Change image every 5 seconds
    }
});
