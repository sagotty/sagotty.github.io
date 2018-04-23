//
function render(data) {

    var addInbox = "<div class='card'><a href='resource/page/FoodAyama.html'><img class='card-img-top' src='./resource/image/food/aiyama-food1.jpeg'></a><div class='card-body'><h4 class='card-title text-center'>เเมวน้อยหอยสังข์</h4><h5 class='card-text'>เมนูเเนะนำ</h5><p class='card-text'>กุ้งฝอยทอด</p><h5 class='card-text'>ราคา</h5><p class='card-text'>฿ : 100 บาท </p><div class=' d-flex justify-content-end'><span class='stars text-warning startHeadList' data-rating='5' data-max-stars='5' ></span></div></div>";
    $('#showComment').append(addInbox);
}
//all Page
const tpage = ["./resource/page/FoodSoGood.html",
    "./resource/page/FoodGus.html"];
///get data anotherpage
for (i=0;i<tpage.length;i++){
    $.get(tpage[i], function(data) {
        var html = $('<div>').html(data);
        var namePage = html.find("#thisPage").html();
        var starPage = html.find("#totalStarThisPage").html();
        var data = {
            "type" : "food",
            "page" : ""

        };
        render(data);
        console.log(i);
        console.log(namePage +starPage);
    });
};
