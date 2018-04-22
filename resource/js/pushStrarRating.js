var sortStar = [];
if (!localStorage.sortStarData){
    localStorage.sortStarData = []
}else{
    sortStar = JSON.parse(localStorage.sortStarData);
    console.log(sortStar);
}
var page = $("#thisPage").html();
var score= $("#totalStarThisPage").html();

var pushLocal = {
    "page" : page,
    "score" : parseFloat(score)
};
sortStar.push(pushLocal);
localStorage.sortStarData = JSON.stringify(sortStar);
//use https://stackoverflow.com/questions/38446162/get-content-from-another-page-with-javascript