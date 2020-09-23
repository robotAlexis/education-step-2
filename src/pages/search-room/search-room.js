
import "../../blocks/dropdown/filter-date-dropdown/filter-date-dropdown.js";
import "../../blocks/dropdown/customers-dropdown/customers-dropdown.js";
import "../../blocks/dropdown/rooms-dropdown/rooms-dropdown.js";
import "../../blocks/range-slider/range-slider.js";
import "../../blocks/expandable-checkbox-list/expandable-checkbox-list.js";

import "../../blocks/preview/preview.js";


document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelectorAll('.search-room__filter-menu').forEach(filterMenuElement => {

        let Inputmask = require('inputmask');

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



        // Установка дат
        let tomorrow = new Date();
        tomorrow.setHours(24,0,0,0);
        let startDate = getDate(getParameterByName('first-search-date'));
        let endDate = getDate(getParameterByName('second-search-date'));
        filterMenuElement.querySelector('.search-room__filter-date-dropdown').firstElementChild.updateFilterDateValues(
            startDate ? startDate : tomorrow,
            endDate ? endDate : tomorrow
        );

        // Установка количества гостей
        let adultsCount = parseInt(getParameterByName('adults-count'), 10);
        let childrenCount = parseInt(getParameterByName('children-count'), 10);
        let babiesCount = parseInt(getParameterByName('babies-count'), 10);
        filterMenuElement.querySelector('.search-room__customers-dropdown').firstElementChild.setCustomersCounts({
            adults: adultsCount ? adultsCount : 0,
            children: childrenCount ? childrenCount : 0,
            babies: babiesCount ? babiesCount : 0
        });


        

        /* Функции */

        // Функция получения параметров ссылки
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        // Функция получения даты из строки
        function getDate(text) {
            if(Inputmask.isValid(text, { alias: "datetime", inputFormat: "dd.mm.yyyy"})){
                let dateValues = text.split('.');
                return new Date(dateValues[2], dateValues[1] - 1, dateValues[0]);
            }
            return null;
        }



    });


});