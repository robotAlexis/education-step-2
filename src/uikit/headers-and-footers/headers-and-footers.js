
document.addEventListener('DOMContentLoaded', function(event) {

    if(!document.querySelector('.headers-and-footers')) return;

    
    // Добавление класса для укороченной версии футера
    document.querySelectorAll(".footer")
        .forEach(element => {
            if(element.offsetWidth < 800){
                element.classList.add("footer_short");
            }
    });


});