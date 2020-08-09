var ids=[1]

$(function(){
    $.get("fragments/shop-item.html",function(shop_item){
        ids.forEach(id => {
            var $item = $(shop_item);

            $item.find("#title").load("Products/" + id  + "/Title.txt");
            $item.find("#desc").load("Products/" + id  + "/Desc.txt");
            $item.find("#about").load("Products/" + id  + "/About.txt");
            $item.find("#cover").attr("src","Products/" + id + "/Cover.png");
            $item.find("#back").attr("src","Products/" + id + "/back.png");
            $("#products").append($item);
        });
    })
})
