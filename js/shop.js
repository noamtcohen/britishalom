var ids=[1]

$(function(){
    $.get("fragments/shop-item.html",function(shop_item){
        ids.forEach(id => {
            var $item = $(shop_item);

            $item.find("#title").load("Products/" + id  + "/Title.txt");
            $item.find("#cover").attr("src","Products/" + id + "/conver.png");
            $item.find("#back").attr("src","Products/" + id + "/back.png");
            $("#products").append($item);
        });
    })
})
