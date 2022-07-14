window.addEventListener("load", function (){
    const content = document.querySelector(".content-right");
    const contentMain = document.querySelector(".content-main");
    const contentItems = document.querySelectorAll(".content-item");
    const upBtn = document.querySelector(".up");
    const downBtn = document.querySelector(".down");
    const contentItemHeight = contentItems[0].offsetHeight;
    const contentHeight = contentItems.height;

    let positionY = 0;
    let index = 0;

    upBtn.addEventListener("click", function(){
        ChangeSlide(-1);
    });

    downBtn.addEventListener("click", function(){
        ChangeSlide(1);
    });

    function ChangeSlide(direction){
        if (direction == 1) {
            if(index == 1){
                return;
            }
            positionY = positionY - contentItemHeight;
            contentMain.style = `transform: translateY(${positionY}px)`;
            index++;
        } else if(direction == -1){
            if(index <= 0){
                index = 0;
                return;
            }
            positionY = positionY + contentItemHeight;
            contentMain.style = `transform: translateY(${positionY}px)`;
            index--;
        }
    }
});