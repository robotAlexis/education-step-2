
document.addEventListener('DOMContentLoaded', function(event){
    document.querySelectorAll('.rooms-dropdown')
        .forEach(dropdown => {

            let dropdownText = dropdown.querySelector('.rooms-dropdown__text');
            let dropdownItems = dropdown.querySelectorAll('.rooms-dropdown__item');

            // Спальни
            let bedroomsCountText = dropdownItems[0].querySelector('.rooms-dropdown__count-text');
            let bedroomsIncreaseButton = dropdownItems[0].querySelector('.rooms-dropdown__count-button_increase');
            let bedroomsDecreaseButton = dropdownItems[0].querySelector('.rooms-dropdown__count-button_decrease');

            // Кровати
            let bedsCountText = dropdownItems[1].querySelector('.rooms-dropdown__count-text');
            let bedsIncreaseButton = dropdownItems[1].querySelector('.rooms-dropdown__count-button_increase');
            let bedsDecreaseButton = dropdownItems[1].querySelector('.rooms-dropdown__count-button_decrease');

            // Ванные комнаты
            let bathroomsCountText = dropdownItems[2].querySelector('.rooms-dropdown__count-text');
            let bathroomsIncreaseButton = dropdownItems[2].querySelector('.rooms-dropdown__count-button_increase');
            let bathroomsDecreaseButton = dropdownItems[2].querySelector('.rooms-dropdown__count-button_decrease');

            // Переключатель для разворота и скрытия
            dropdownText.onclick = function(){
                dropdownText.classList.toggle('rooms-dropdown__text_opened');
                dropdown.querySelector('.rooms-dropdown__item-list').classList.toggle('rooms-dropdown__item-list_opened');
            }

            // Изменение количества спален
            bedroomsIncreaseButton.onclick = function(){
                bedroomsCountText.value++;
            }
            bedroomsDecreaseButton.onclick = function(){
                if(--bedroomsCountText.value < 0) bedroomsCountText.value = 0;
            }

            // Изменение количества кроватей
            bedsIncreaseButton.onclick = function(){
                bedsCountText.value++;
            }
            bedsDecreaseButton.onclick = function(){
                if(--bedsCountText.value < 0) bedsCountText.value = 0;
            }

            // Изменение количества ванные комнаты
            bathroomsIncreaseButton.onclick = function(){
                bathroomsCountText.value++;
            }
            bathroomsDecreaseButton.onclick = function(){
                if(--bathroomsCountText.value < 0) bathroomsCountText.value = 0;
            }


        })
});