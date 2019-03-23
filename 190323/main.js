new Drift(document.querySelector(".mainImg"), {
    paneContainer: document.querySelector(".inlineBlock2"),
    inlinePane: 900,
    inlineOffsetY: -85,
    containInline: true,
    hoverBoundingBox: true,
    zoomFactor: 2
});

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

    $(".moreDetailButton").click(function() {
        if ($("#removeBody-1-2-Image").hasClass("body-1-2-Image")) {
            $("#removeBody-1-2-Image").removeClass("body-1-2-Image");
            $(".moreDetailButton").html("상품정보 접기");
        } else {
            $("#removeBody-1-2-Image").addClass("body-1-2-Image");
            $(".moreDetailButton").html("상품정보 더보기");
        }
    });
});
