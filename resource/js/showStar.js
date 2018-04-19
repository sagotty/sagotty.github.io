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

$.fn.showstarsHead = function() {
    return $(this).each(function() {

        var rating = $('#totalStarThisPage').data("ttstar");
        var maxStars = $(this).data("maxStars");


        var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-star"></i>');

        var halfStar = ((rating%1) !== 0) ? '<i class="fa fa-star-half-empty"></i>': '';

        var noStar = new Array(Math.floor(maxStars + 1 - rating)).join('<i class="fa fa-star-o"></i>');

        $(this).html(fullStar + halfStar + noStar);

    });
};
$.fn.shownumStars = function(){
    return $(this).each(function () {
        var numStar = $('#totalStarThisPage').data("ttstar");
        //console.log(numStar);
        var grader = "good";

        if (numStar<2.5){
            grader = "bad";
            this.classList.add('badge-danger');
        }else if(numStar < 4){
            grader = "poor";
            this.classList.add('badge-warning');
        }else if(numStar <5){
            grader = "good";
            this.classList.add('badge-success');
        }else {
            grader = "excellent";
            this.classList.add('badge-success');
        }

        $(this).html(grader+" | "+numStar + " " + '<i class="fas fa-star">');

    });
};
$('#commentjs').ready(function () {
    console.log("SS "+$('#totalStarThisPage').data("ttstar"));
    $('.stars').showstars();
    $('.showStarAll').shownumStars();
    $('#starHead').showstarsHead();
});
