$(document).ready(function() {
    $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("navbar-toggle-active");
        $("#navbar-collapse").toggleClass("h-[220px]");
    });

    // Dark Mode
    // $("#dark-toggle").on("click", function() {
    //     if( $("#dark-toggle").checked) {
    //         $("#dark-mode").addClass("dark");
    //     } else {
    //         $("#dark-mode").removeClass("dark");
    //     }
    // });
});

window.onscroll = function () {
    const scrollTop1 = document.querySelector("#scrolltop");
    const fixedScrollTop1 = scrollTop1.offsetTop;

    if( window.pageYOffset > fixedScrollTop1) {
        scrollTop1.classList.remove("hidden");
        scrollTop1.classList.add("flex");
    } else {
        scrollTop1.classList.remove("flex");
        scrollTop1.classList.add("hidden");
    }
}

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("#dark-mode");

darkToggle.addEventListener("click", function() {
    if ( darkToggle.checked) {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
});

