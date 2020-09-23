document.addEventListener('DOMContentLoaded', function(event){

    document.querySelectorAll('.rate-button').forEach(rateButtonElement => {

        // Элементы звёзд
        let starElements = Array.prototype.slice.call(rateButtonElement.querySelectorAll('.rate-button__star'));

        // Количество звёзд
        let rating = 0;
        for (let i = 0; i < starElements.length; ++i) {
            if(!starElements[i].classList.contains('rate-button__star_checked')) break;
            rating++;
        }

        // Расстановка звёзд по рейтингу
        function setRateStars() {
            for (let i = 0; i < starElements.length; ++i) {
                starElements[i].classList.toggle('rate-button__star_checked', i < rating);
            }
        }

        // Расстановка звёзд в зависимости от того, над какой звездой находится курсор
        function setMouseStars(event) {
            let isStar = true;
            for (let i = 0; i < starElements.length; ++i) {
                starElements[i].classList.toggle('rate-button__star_checked', isStar);
                if(event.target == starElements[i]) isStar = !isStar;
            }
        }

        // Нажатие на звезду
        function onStarClick(event) {
            let clickRate = 1;
            // Выяснение оценки
            for (let i = 0; i < starElements.length; ++i) {
                if(event.target == starElements[i]) break;
                clickRate++;
            }
            // Удаление обработчиков
            rateButtonElement.removeEventListener('mouseover', setMouseStars);
            rateButtonElement.removeEventListener('mouseout', setRateStars);
            starElements.forEach(starElement => {
                starElement.removeEventListener('click', onStarClick);
            });
            // Сброс звёзд
            setRateStars();
            // Показ выбранной оценки
            alert(clickRate + ' stars');
        }

        // Обработчики
        if(!rateButtonElement.classList.contains('rate-button__disabled')) {
            rateButtonElement.addEventListener('mouseover', setMouseStars);
            rateButtonElement.addEventListener('mouseout', setRateStars);
            starElements.forEach(starElement => {
                starElement.addEventListener('click', onStarClick);
            });
        }

    });

});