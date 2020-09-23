
document.addEventListener('DOMContentLoaded', function(event){
    document.querySelectorAll('.rooms-dropdown')
        .forEach(dropdown => {

            let dropdownText = dropdown.querySelector('.rooms-dropdown__text');
            let dropdownItemList = dropdown.querySelector('.rooms-dropdown__item-list');
            let dropdownItems = dropdown.querySelectorAll('.rooms-dropdown__item');

            // Спальни
            let bedroomsCountInput = dropdownItems[0].querySelector('.rooms-dropdown__count-input');
            let bedroomsCountText = dropdownItems[0].querySelector('.rooms-dropdown__count-text');
            let bedroomsIncreaseButton = dropdownItems[0].querySelector('.rooms-dropdown__count-button_increase');
            let bedroomsDecreaseButton = dropdownItems[0].querySelector('.rooms-dropdown__count-button_decrease');

            // Кровати
            let bedsCountInput = dropdownItems[1].querySelector('.rooms-dropdown__count-input');
            let bedsCountText = dropdownItems[1].querySelector('.rooms-dropdown__count-text');
            let bedsIncreaseButton = dropdownItems[1].querySelector('.rooms-dropdown__count-button_increase');
            let bedsDecreaseButton = dropdownItems[1].querySelector('.rooms-dropdown__count-button_decrease');

            // Ванные комнаты
            let bathroomsCountInput = dropdownItems[2].querySelector('.rooms-dropdown__count-input');
            let bathroomsCountText = dropdownItems[2].querySelector('.rooms-dropdown__count-text');
            let bathroomsIncreaseButton = dropdownItems[2].querySelector('.rooms-dropdown__count-button_increase');
            let bathroomsDecreaseButton = dropdownItems[2].querySelector('.rooms-dropdown__count-button_decrease');

            // Переключатель для разворота и скрытия
            dropdownText.onclick = function(){
                dropdownText.classList.toggle('rooms-dropdown__text_opened');
                dropdownItemList.classList.toggle('rooms-dropdown__item-list_opened');
            }

            // Изменение текста
            function updateText(){
                bedroomsCountText.innerHTML = bedroomsCountInput.value;
                bedsCountText.innerHTML = bedsCountInput.value;
                bathroomsCountText.innerHTML = bathroomsCountInput.value;
                dropdownText.innerHTML = `${bedroomsCountInput.value} спальни, ${bedsCountInput.value} кровати, ${bathroomsCountInput.value} ванные комнаты`;
            }

            // Изменение количества спален
            bedroomsIncreaseButton.onclick = function(){
                bedroomsCountInput.value++;
                bedroomsDecreaseButton.classList.remove('rooms-dropdown__count-button_inactive');
                updateText();
            }
            bedroomsDecreaseButton.onclick = function(){
                if(--bedroomsCountInput.value < 0) bedroomsCountInput.value = 0;
                if(bedroomsCountInput.value < 1) bedroomsDecreaseButton.classList.add('rooms-dropdown__count-button_inactive');
                updateText();
            }

            // Изменение количества кроватей
            bedsIncreaseButton.onclick = function(){
                bedsCountInput.value++;
                bedsDecreaseButton.classList.remove('rooms-dropdown__count-button_inactive');
                updateText();
            }
            bedsDecreaseButton.onclick = function(){
                if(--bedsCountInput.value < 0) bedsCountInput.value = 0;
                if(bedsCountInput.value < 1) bedsDecreaseButton.classList.add('rooms-dropdown__count-button_inactive');
                updateText();
            }

            // Изменение количества ванных комнат
            bathroomsIncreaseButton.onclick = function(){
                bathroomsCountInput.value++;
                bathroomsDecreaseButton.classList.remove('rooms-dropdown__count-button_inactive');
                updateText();
            }
            bathroomsDecreaseButton.onclick = function(){
                if(--bathroomsCountInput.value < 0) bathroomsCountInput.value = 0;
                if(bathroomsCountInput.value < 1) bathroomsDecreaseButton.classList.add('rooms-dropdown__count-button_inactive');
                updateText();
            }

            // Скрытие списка по нажатию где-нибудь в другом месте
            window.addEventListener('click', (event) => {
                if(!dropdownItemList.classList.contains('rooms-dropdown__item-list_opened')) return;

                let isOk = event.target == dropdown || dropdown.contains(event.target);

                if(!isOk) {
                    dropdownText.classList.remove('rooms-dropdown__text_opened');
                    dropdownItemList.classList.remove('rooms-dropdown__item-list_opened');
                }
            });


            // Установка значений {bedrooms, beds, bathrooms}
            dropdown.setRoomsCounts = function(counts) {
                bedroomsCountInput.value = counts.bedrooms;
                bedroomsDecreaseButton.classList.toggle('rooms-dropdown__count-button_inactive', bedroomsCountInput.value < 1);
                bedsCountInput.value = counts.beds;
                bedsDecreaseButton.classList.toggle('rooms-dropdown__count-button_inactive', bedsCountInput.value < 1);
                bathroomsCountInput.value = counts.bathrooms;
                bathroomsDecreaseButton.classList.toggle('rooms-dropdown__count-button_inactive', bathroomsCountInput.value < 1);
                updateText();
            }

        })
});