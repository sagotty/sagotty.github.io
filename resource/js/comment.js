var currentPage = $('#thisPage').html();
//console.log(currentPage);
function render(data){
    var addInbox = "<div class='card'><div class='container-fluid card-body my-2' id ='displayCm'><div class='row'><div class='col-lg-3 text-center'><i class='fas fa-user-circle fa-5x'></i><div>"+data.uname+"<br/>10/04/2016</div></div><div class='col cad-body text-dark'><div class='row d-flex justify-content-center justify-content-md-end text-warning px-2'><span id = 'starsC'class='stars' data-rating='5' data-max-stars='5' ></span></div><div class='row'><div class='container text-center text-lg-left'>"+data.ucomment+"</div></div> </div> </div></div></div>";
    $('#showComment').append(addInbox);
}
// getdataThispage
function getDataCommentNowPage(namepage) {
    var dataCommentThisPage = [];
    var dataInLocal;
    console.log("INfunc Get Comment " +namepage+" "+ dataCommentThisPage)
    console.log(10)
    console.log((localStorage.getItem("comentData"))=="");
    console.log(11)
    if ((localStorage.getItem("comentData"))==""){
        dataInLocal = undefined
    }else {
        dataInLocal = JSON.parse(localStorage.comentData);
        for(n=0;n<dataInLocal.length;n++){
            if(dataInLocal[n]['nowpage']== namepage){
                dataCommentThisPage.push(dataInLocal[n])

            }
        }

    }
    // console.log(dataCommentThisPage);
    return dataCommentThisPage
}

// filter
function filterComment(username,usermail,commentDetail) {
    if (usermail != "" && usermail != "" && commentDetail != ""){
        console.log(true)
        return true
    }else {
        console.log(false)
        return false
    }

}



// chang id star
function changeIdStar(number) {
    $('#starsC').attr('id', 'starsC'+number);
}
//chang star
function changdataAtb(data,idStar){
    //console.log(typeof idStar)
    var s =  $(idStar).data('rating');
    //console.log(s);
    $(idStar).data('rating',data);
    //console.log($(idStar).data('rating'));

};

// getStar
function getStar(dataComment) {
    console.log(dataComment)
    if ((dataComment.length)!=0){
        var listUsernameAndStarsCurrentPage = dataComment;
        var dataInLocal = JSON.parse(localStorage.comentData);
        // var currentPage = dataInLocal[0]['nowpage'];
        //  var currentStar = dataInLocal[0]['ustars'];
        // console.log(listUsernameAndStarsCurrentPage);
        // console.log(currentStar);
        for(i=0;i<listUsernameAndStarsCurrentPage.length;i++){
            // console.log(i);
            //console.log(dataInLocal[Math.abs(listUsernameAndStarsCurrentPage.length-i-1)]);
            var nowStar = dataInLocal[Math.abs(listUsernameAndStarsCurrentPage.length-i-1)]['ustars'];
            changeIdStar(i);

            var nowId = '#'+'starsC'+ i.toString();
            //console.log(nowId);
            changdataAtb(nowStar,nowId)
            // console.log("INfor");
        }
    }

}
//totalStars
function totalstar(dataCM,starsWriter){
    console.log("TTSS In func"+dataCM)
    //console.log(dataCM[9]['ustars']);
    var totalstarInFn = starsWriter ;
    var round = 1 ;
    if(dataCM!=undefined){
        for (ns=0;ns<dataCM.length;ns++){
            totalstarInFn += dataCM[ns]['ustars']
            round+=1
        }
        console.log("if ttS "+totalstarInFn)
        return (totalstarInFn/round) ;
    }else{
        return totalstarInFn
        console.log("else ttS " + totalstarInFn)
    }
}

//ShowStars
$.fn.showstars = function() {
    return $(this).each(function() {
        var rating = $(this).data("rating");
        var maxStars = $(this).data("maxStars");
        var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-star"></i>');
        var halfStar = ((rating%1) !== 0) ?  '<i class="fa fa-star-half-empty"></i>': '';
        var noStar = new Array(Math.floor(maxStars + 1 - rating)).join('<i class="fa fa-star-o"></i>');
        $(this).html(fullStar + halfStar + noStar);
    });
};
//reload
function reloadpart(){
    window.location.reload(true);
    // $("#commentPart").load(thispage);
    // comment = JSON.parse(localStorage.comentData);
    // for(var i =0;i<comment.length;i++){
    //     render(comment[Math.abs(comment.length-i-1)])
};

// load comment
console.log("Be load CM")
function loadComment(commentThisPage) {
    var comment = commentThisPage;
    console.log("INFUNc LoAD CM");
    console.log("INFunc "+comment);
    if(comment.length != 0){
        $('#showEmptyComment').remove();
        for(var i =0;i<comment.length;i++){
            render(comment[Math.abs(comment.length-i-1)])
        }
    }

}


// commentPart
$(document).ready(function () {
    var comment =[];
    if(!localStorage.comentData){
        localStorage.comentData =[];
    }else {
        comment = JSON.parse(localStorage.comentData);
        console.log(comment);

    }

    $('#addcomment').click(function () {
        //console.log(starUser);
        // console.log(typeof starUser)
        if (filterComment($('#username').val(),$('#emailUser').val(),$('#commentByUser').val())){
            var addObj = {
                "nowpage": currentPage,
                "uname" : $('#username').val(),
                "umali" : $('#emailUser').val(),
                "ustars" :  parseFloat(document.querySelector('input[name="rating"]:checked').value) ,
                "ucomment" : $('#commentByUser').val()

            };
            comment.push(addObj);
            localStorage.comentData = JSON.stringify(comment);
            $('#username').val('');
            $('#emailUser').val('');
            $('#commentByUser').val('');
            $('#displayCm').remove();
            $("#addcomment").onclick;
            reloadpart();
        }else {
            swal('กรุณากรอกข้อมูลให้ครบ',"คุณจำเป็นต้องกรอกข้อมูลให้ครบทุกช่อง","warning");
        }

    });
    var writerStar = parseFloat($('#totalStarThisPage').html());
    console.log("WS "+writerStar+typeof writerStar);
    var dtcm = getDataCommentNowPage(currentPage);
    var totalStar = totalstar(dtcm,writerStar);
    loadComment(dtcm);
    getStar(dtcm);
    $('.stars').showstars();
    console.log("TTCM "+totalStar);
    var cc = $('#totalStarThisPage').data('ttstar');
    $('#totalStarThisPage').data('ttstar',totalStar);
    console.log("tt"+totalStar);
    console.log("cc"+cc)
    console.log("After"+$('#totalStarThisPage').data('ttstar'))
    console.log("Be load CM")
});



