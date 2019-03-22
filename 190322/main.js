$(function() {
    var menuBar = $(".menuBar").offset();

    $(window).scroll(function() {
        if ($(document).scrollTop() > menuBar.top) {
            $(".menuBar").addClass("jbFixed");
        } else {
            $(".menuBar").removeClass("jbFixed");
        }
    });

    $(".showHide")
        .slice(0, 3)
        .show();
    $("#load").click(function(e) {
        e.preventDefault();
        $(".showHide:hidden")
            .slice(0)
            .show();
        $("#load").hide();
    });
});
