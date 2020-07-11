$(document).ready(function () {
    $("#menu").on("click", function () {
        $("#menu").hide();
        $("#categories").css("visibility", "visible");
        $("#categories").hide();
        $("#menu-close, #categories").slideDown("fast");
    });
    $("#menu-close").on("click", function () {
        $("#menu-close, #categories").slideUp("fast");
        $("#menu").show();
    });
});
