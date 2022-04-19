$(document).ready(function() {
    $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("navbar-toggle-active");
        $("#navbar-collapse").toggleClass("h-[220px]");
    });
});