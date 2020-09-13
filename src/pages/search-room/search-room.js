
import "../../blocks/dropdown/filter-date-dropdown/filter-date-dropdown.js";
import "../../blocks/dropdown/customers-dropdown/customers-dropdown.js";
import "../../blocks/dropdown/rooms-dropdown/rooms-dropdown.js";
import "../../blocks/range-slider/range-slider.js";
import "../../blocks/expandable-checkbox-list/expandable-checkbox-list.js";

import "../../blocks/preview/preview.js";


document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelectorAll('.search-room__filter-menu').forEach(filterMenuElement => {

        // Кнопка разворачивания/сворачивания меню
        let toggleButtonElement = filterMenuElement.querySelector('.search-room__menu-toggle-button');

        // Меню
        let menuElement = filterMenuElement.querySelector('.search-room__menu-elements');

        // Обработка нажатия кнопки
        toggleButtonElement.onclick = function() {
            menuElement.classList.toggle(
                'search-room__menu-elements_expanded',
                toggleButtonElement.classList.toggle('search-room__menu-toggle-button_expanded')
            );
        }

    });


});