$(document).ready(function () {
    $(".nav-link").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).position().top - 65 + "px",
            },
            800
        );
    });
});
