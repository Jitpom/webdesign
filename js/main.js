$(document).ready(function () {
    $("#bar-icon").click(function () {
        if (!$("#nav-container").hasClass("active")) {
            $("#nav-container").addClass("active");
        }
    });

    $("#cross-icon").click(function () {
        if ($("#nav-container").hasClass("active")) {
            $("#nav-container").removeClass("active");
        }
    });
});