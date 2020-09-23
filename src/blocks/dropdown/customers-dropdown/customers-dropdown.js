
document.addEventListener('DOMContentLoaded', function(event){
    document.querySelectorAll('.customers-dropdown')
        .forEach(dropdown => {

            let dropdownText = dropdown.querySelector('.customers-dropdown__text');
            let dropdownItemList = dropdown.querySelector('.customers-dropdown__item-list');
            let dropdownItems = dropdownItemList.querySelectorAll('.customers-dropdown__item');

            // Взрослые
            let adultsCountInput = dropdownItems[0].querySelector('.customers-dropdown__count-input');
            let adultsCountText = dropdownItems[0].querySelector('.customers-dropdown__count-text');
            let adultsIncreaseButton = dropdownItems[0].querySelector('.customers-dropdown__count-button_increase');
            let adultsDecreaseButton = dropdownItems[0].querySelector('.customers-dropdown__count-button_decrease');

            // Дети
            let childrenCountInput = dropdownItems[1].querySelector('.customers-dropdown__count-input');
            let childrenCountText = dropdownItems[1].querySelector('.customers-dropdown__count-text');
            let childrenIncreaseButton = dropdownItems[1].querySelector('.customers-dropdown__count-button_increase');
            let childrenDecreaseButton = dropdownItems[1].querySelector('.customers-dropdown__count-button_decrease');

            // Младенцы
            let babiesCountInput = dropdownItems[2].querySelector('.customers-dropdown__count-input');
            let babiesCountText = dropdownItems[2].querySelector('.customers-dropdown__count-text');
            let babiesIncreaseButton = dropdownItems[2].querySelector('.customers-dropdown__count-button_increase');
            let babiesDecreaseButton = dropdownItems[2].querySelector('.customers-dropdown__count-button_decrease');

            // Переключатель для разворота и скрытия
            dropdownText.onclick = function(){
                dropdownText.classList.toggle('customers-dropdown__text_opened');
                dropdownItemList.classList.toggle('customers-dropdown__item-list_opened');
            }

            // Кнопка очистки
            let clearButton = dropdown.querySelector('.customers-dropdown__clear-button');

            // Изменение текста
            function updateText(){
                adultsCountText.innerHTML = adultsCountInput.value;
                childrenCountText.innerHTML = childrenCountInput.value;
                babiesCountText.innerHTML = babiesCountInput.value;
                let guestCount = parseInt(adultsCountInput.value, 10) + parseInt(childrenCountInput.value, 10) + parseInt(babiesCountInput.value, 10);
                dropdownText.innerHTML = guestCount > 0 ? `${guestCount} гостя` : 'Сколько гостей';
                clearButton.classList.toggle('customers-dropdown__clear-button_inactive', guestCount < 1);
            }

            // Изменение количества взрослых
            adultsIncreaseButton.onclick = function(){
                adultsCountInput.value++;
                adultsDecreaseButton.classList.remove('customers-dropdown__count-button_inactive');
                updateText();
            }
            adultsDecreaseButton.onclick = function(){
                if(--adultsCountInput.value < 0) adultsCountInput.value = 0;
                if(adultsCountInput.value < 1) adultsDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                updateText();
            }

            // Изменение количества детей
            childrenIncreaseButton.onclick = function(){
                childrenCountInput.value++;
                childrenDecreaseButton.classList.remove('customers-dropdown__count-button_inactive');
                updateText();
            }
            childrenDecreaseButton.onclick = function(){
                if(--childrenCountInput.value < 0) childrenCountInput.value = 0;
                if(childrenCountInput.value < 1) childrenDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                updateText();
            }

            // Изменение количества младенцев
            babiesIncreaseButton.onclick = function(){
                babiesCountInput.value++;
                babiesDecreaseButton.classList.remove('customers-dropdown__count-button_inactive');
                updateText();
            }
            babiesDecreaseButton.onclick = function(){
                if(--babiesCountInput.value < 0) babiesCountInput.value = 0;
                if(babiesCountInput.value < 1) babiesDecreaseButton.classList.add('customers-dropdown__count-button_inactive');
                updateText();
            }

            // Кнопка очистки
            clearButton.onclick = function(){
                adultsCountInput.value = childrenCountInput.value = babiesCountInput.value = 0;
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


            // Скрытие списка по нажатию где-нибудь в другом месте
            window.addEventListener('click', (event) => {
                if(!dropdownItemList.classList.contains('customers-dropdown__item-list_opened')) return;

                let isOk = event.target == dropdown || dropdown.contains(event.target);

                if(!isOk) {
                    dropdownText.classList.remove('customers-dropdown__text_opened');
                    dropdownItemList.classList.remove('customers-dropdown__item-list_opened');
                }
            });


            // Установка значений {adults, children, babies}
            dropdown.setCustomersCounts = function(counts) {
                adultsCountInput.value = counts.adults;
                adultsDecreaseButton.classList.toggle('customers-dropdown__count-button_inactive', adultsCountInput.value < 1);
                childrenCountInput.value = counts.children;
                childrenDecreaseButton.classList.toggle('customers-dropdown__count-button_inactive', childrenCountInput.value < 1);
                babiesCountInput.value = counts.babies;
                babiesDecreaseButton.classList.toggle('customers-dropdown__count-button_inactive', babiesCountInput.value < 1);
                updateText();
            }


        });
});