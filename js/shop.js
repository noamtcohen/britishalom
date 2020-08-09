var ids=[1]

$(function(){
    $.get("fragments/shop-item.html",function(shop_item){
        ids.forEach(id => {
            var $item = $(shop_item);

            $item.find("#title").load("Products/" + id  + "/Title.txt");
            $("#products").append($item);
        });
    })
})
