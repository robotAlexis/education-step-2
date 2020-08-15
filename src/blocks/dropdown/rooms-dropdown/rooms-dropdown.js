
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

            // Изменение текста
            function updateText(){
                dropdownText.innerHTML = `${bedroomsCountText.value} спальни, ${bedsCountText.value} кровати, ${bathroomsCountText.value} ванные комнаты`;
            }

            // Изменение количества спален
            bedroomsIncreaseButton.onclick = function(){
                bedroomsCountText.value++;
                bedroomsDecreaseButton.classList.remove('rooms-dropdown__count-button_inactive');
                updateText();
            }
            bedroomsDecreaseButton.onclick = function(){
                if(--bedroomsCountText.value < 0) bedroomsCountText.value = 0;
                if(bedroomsCountText.value < 1) bedroomsDecreaseButton.classList.add('rooms-dropdown__count-button_inactive');
                updateText();
            }

            // Изменение количества кроватей
            bedsIncreaseButton.onclick = function(){
                bedsCountText.value++;
                bedsDecreaseButton.classList.remove('rooms-dropdown__count-button_inactive');
                updateText();
            }
            bedsDecreaseButton.onclick = function(){
                if(--bedsCountText.value < 0) bedsCountText.value = 0;
                if(bedsCountText.value < 1) bedsDecreaseButton.classList.add('rooms-dropdown__count-button_inactive');
                updateText();
            }

            // Изменение количества ванных комнат
            bathroomsIncreaseButton.onclick = function(){
                bathroomsCountText.value++;
                bathroomsDecreaseButton.classList.remove('rooms-dropdown__count-button_inactive');
                updateText();
            }
            bathroomsDecreaseButton.onclick = function(){
                if(--bathroomsCountText.value < 0) bathroomsCountText.value = 0;
                if(bathroomsCountText.value < 1) bathroomsDecreaseButton.classList.add('rooms-dropdown__count-button_inactive');
                updateText();
            }


        })
});