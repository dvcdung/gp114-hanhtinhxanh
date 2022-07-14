//Coi hien thi hay an icon down up trong bai viet
for(let i = 0; i < jQuery(".post > .caption").length; i++) {
    if(jQuery(".post > .caption")[i].lastElementChild.innerHTML === "") {
        jQuery(".post > .caption")[i].firstElementChild.lastElementChild.className = "display_none";
    } else {
        jQuery(".post > .caption")[i].firstElementChild.lastElementChild.className = "fa-solid fa-caret-down";
    }
}

jQuery(document).ready(function() {

    //HIEU UNG KHI AN NUT THICH
    jQuery(".yeuthich > i").click(function() {
        if(jQuery(this).css('color') == "rgb(0, 0, 0)") {
            jQuery(this).css({"transition":"400ms"});
            jQuery(this).css("color", "rgb(5, 200, 5)");
            var a = parseInt(jQuery(this).next().text());
            jQuery(this).next().text(a + 1);
        }else {
            jQuery(this).css({"transition":"400ms"});
            jQuery(this).css("color", "rgb(0, 0, 0)");
            var a = parseInt(jQuery(this).next().text());
            jQuery(this).next().text(a - 1);
        }
    });
    //HIEU UNG KHI AN NUT THEO DOI
    jQuery(".theodoi > i").click(function() {
        if(jQuery(this).hasClass("fa-circle-plus")) {
            jQuery(this).css({"transition":"400ms"});
            jQuery(this).removeClass("fa-circle-plus");
            jQuery(this).addClass("fa-circle-check");
        }else { 
            jQuery(this).css({"transition":"400ms"});
            jQuery(this).removeClass("fa-circle-check");
            jQuery(this).addClass("fa-circle-plus");
        }
    });
    //HIEU UNG KHI AN NUT COMMENT
    jQuery(".tuongtac > .binhluan > i").click(function() {
        if(jQuery(this).css('color') == "rgb(0, 0, 0)") {
            jQuery(this).css({"transition":"400ms"});
            jQuery(this).css("color", "rgb(5, 200, 5)");
            jQuery(this).parents('.avatar').next().next().slideToggle('slow');
        }else {
            jQuery(this).css({"transition":"400ms"});
            jQuery(this).css("color", "rgb(0, 0, 0)");
            jQuery(this).parents('.avatar').next().next().slideToggle('slow');
        }
    });
    //HIEU UNG KHI DI CLICK VO CAPTION
    jQuery(".post > .caption").click(function() {
        if(jQuery(this).children().last().text() !== "") {
            if(jQuery(this).children().last().css("display") === "none") {
                jQuery(this).children().first().children().last().removeClass("fa-solid fa-caret-down");
                jQuery(this).children().first().children().last().addClass("fa-solid fa-caret-up");
            } else {
                jQuery(this).children().first().children().last().removeClass("fa-solid fa-caret-up");
                jQuery(this).children().first().children().last().addClass("fa-solid fa-caret-down");
            }
            jQuery(this).children().last().slideToggle("slow");
        };
    });
    //HÀM KHI NHẤP NÚT GỬI
    jQuery('.guibtn').click(function() {
        var myList = jQuery(this).parents('.commentbox').children().first(0);
        var content = '<li class="row"><div class="avatar"><img src="../Image/Avatar/avt.jpg" width="40px" height="40px"></div><div class="comment"><p><b>'+ 'Võ Văn Anh' +'</b></p><p class="commentline">'+ jQuery(this).parent().children().first().val() +'</p></div></li>';
        myList.append(content);
        var a = jQuery(this).parents('.row').children().first(0).children().last().children().last().children().last().text();
        jQuery(this).parents('.row').children().first(0).children().last().children().last().children().last().text(parseInt(a) + 1);
    });
});