
document.addEventListener('DOMContentLoaded', function(event){
    document.querySelectorAll('.customers-dropdown')
        .forEach(dropdown => {

            let dropdownText = dropdown.querySelector('.customers-dropdown__text');
            let dropdownItems = dropdown.querySelectorAll('.customers-dropdown__item');

            // Взрослые
            let adultsCountText = dropdownItems[0].querySelector('.customers-dropdown__count-text');
            let adultsIncreaseButton = dropdownItems[0].querySelector('.customers-dropdown__count-button_increase');
            let adultsDecreaseButton = dropdownItems[0].querySelector('.customers-dropdown__count-button_decrease');

            // Дети
            let childrenCountText = dropdownItems[1].querySelector('.customers-dropdown__count-text');
            let childrenIncreaseButton = dropdownItems[1].querySelector('.customers-dropdown__count-button_increase');
            let childrenDecreaseButton = dropdownItems[1].querySelector('.customers-dropdown__count-button_decrease');

            // Младенцы
            let babiesCountText = dropdownItems[2].querySelector('.customers-dropdown__count-text');
            let babiesIncreaseButton = dropdownItems[2].querySelector('.customers-dropdown__count-button_increase');
            let babiesDecreaseButton = dropdownItems[2].querySelector('.customers-dropdown__count-button_decrease');

            // Переключатель для разворота и скрытия
            dropdownText.onclick = function(){
                dropdownText.classList.toggle('customers-dropdown__text_opened');
                dropdown.querySelector('.customers-dropdown__item-list').classList.toggle('customers-dropdown__item-list_opened');
            }

            // Кнопка очистки
            let clearButton = dropdown.querySelector('.customers-dropdown__clear-button');

            // Изменение текста
            function updateText(){
                let guestCount = parseInt(adultsCountText.value, 10) + parseInt(childrenCountText.value, 10) + parseInt(babiesCountText.value, 10);
                dropdownText.innerHTML = guestCount > 0 ? `${guestCount} гостя` : 'Сколько гостей';
                clearButton.classList.toggle('customers-dropdown__clear-button_inactive', guestCount < 1);
            }

            // Изменение количества взрослых
            adultsIncreaseButton.onclick = function(){
                adultsCountText.value++;
                adultsDecreaseButton.classList.remove('customers-dropdown__count-button_inactive');
                updateText();
            }
            adultsDecreaseButton.onclick = function(){
                if(--adultsCountText.value < 0) adultsCountText.value = 0;
                if(adultsCountText.value < 1) adultsDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                updateText();
            }

            // Изменение количества детей
            childrenIncreaseButton.onclick = function(){
                childrenCountText.value++;
                childrenDecreaseButton.classList.remove('customers-dropdown__count-button_inactive');
                updateText();
            }
            childrenDecreaseButton.onclick = function(){
                if(--childrenCountText.value < 0) childrenCountText.value = 0;
                if(childrenCountText.value < 1) childrenDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                updateText();
            }

            // Изменение количества младенцев
            babiesIncreaseButton.onclick = function(){
                babiesCountText.value++;
                babiesDecreaseButton.classList.remove('customers-dropdown__count-button_inactive');
                updateText();
            }
            babiesDecreaseButton.onclick = function(){
                if(--babiesCountText.value < 0) babiesCountText.value = 0;
                if(babiesCountText.value < 1) babiesDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                updateText();
            }

            // Кнопка очистки
            clearButton.onclick = function(){
                adultsCountText.value = childrenCountText.value = babiesCountText.value = 0;
                adultsDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                childrenDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                babiesDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                clearButton.classList.add('customers-dropdown__clear-button_inactive');
                updateText();
            }

            // Кнопка ок
            dropdown.querySelector('.customers-dropdown__ok-button').onclick = function(){
                dropdownText.classList.remove('customers-dropdown__text_opened');
                dropdown.querySelector('.customers-dropdown__item-list').classList.remove('customers-dropdown__item-list_opened');
            }

        });
});