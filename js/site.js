$(function(){
    $.get("fragments/title.html",function(data){
        $("#title").html(data);
    })
})