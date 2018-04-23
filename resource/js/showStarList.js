$.fn.showstars = function() {
    return $(this).each(function() {

        var rating = $(this).data("rating");
        var maxStars = $(this).data("maxStars");


        var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-star"></i>');

        var halfStar = ((rating%1) !== 0) ? '<i class="fa fa-star-half-empty"></i>': '';

        var noStar = new Array(Math.floor(maxStars + 1 - rating)).join('<i class="fa fa-star-o"></i>');

        $(this).html(fullStar + halfStar + noStar);

    });
};

$(document).ready(function () {
    //console.log("SS "+$('#totalStarThisPage').data("ttstar"));
    //('.stars').showstars();
    //$('.showStarAll').shownumStars();
    $('.startHeadList').showstars();
});
