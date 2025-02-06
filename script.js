document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop() || "index.html";


    let navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href");

        if (currentPage === linkPath) {
            link.classList.add("active");
        }
    });
});
