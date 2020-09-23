import '../../dropdown/date-dropdown/date-dropdown.js';
import '../../calendar/calendar.js';
import '../../dropdown/customers-dropdown/customers-dropdown.js';

document.addEventListener('DOMContentLoaded', function(event){

    // Формы поиска
    document.querySelectorAll('.reservation-form').forEach(reservationFormElement => {

        // Какая-то херня
        let Inputmask = require('inputmask');

        // Количество милисекунд в дне
        const ONE_DAY = 1000 * 60 * 60 * 24;

        // Цена
        let dailyCost = parseInt(reservationFormElement.querySelector('.reservation-form__daily-cost').value, 10);

        // Елементы ввода даты
        let dateInputElements = Array.prototype.slice.call(reservationFormElement.querySelectorAll('.date-dropdown__input'));
        dateInputElements.forEach(dateInputElement => {
            dateInputElement.onfocus = openCalendar;
        });

        // Календарь
        let calendarElement = reservationFormElement.querySelector('.calendar');

        // Записи с ценой
        let roomPriceText = reservationFormElement.querySelector('.reservation-form__check').firstElementChild.querySelector('.reservation-form__check-item-text');
        let roomPriceCount = reservationFormElement.querySelector('.reservation-form__check').firstElementChild.querySelector('.reservation-form__check-item-cost');
        let totalPriceCount = reservationFormElement.querySelector('.reservation-form__check-total-cost');
        //
        updatePrices(getInputDate(dateInputElements[0]), getInputDate(dateInputElements[1]));



        /* Функции */

        // Открытие календаря
        function openCalendar() {
            calendarElement.openCalendar({
                callback: onCalendarOk,
                inputElements: dateInputElements.map(dateInputElement => { return dateInputElement.parentElement; }), 
                startDate: getInputDate(dateInputElements[0]),
                endDate: getInputDate(dateInputElements[1])
            });
        }

        // Запись полученных дат
        function onCalendarOk(startDate, endDate) {
            setInputDate(dateInputElements[0], startDate);
            setInputDate(dateInputElements[1], endDate);
            updatePrices(startDate, endDate);
        }

        // Попытка получения даты из поля
        function getInputDate(element) {
            if(Inputmask.isValid(element.value, { alias: "datetime", inputFormat: "dd.mm.yyyy"})){
                let dateValues = element.value.split('.');
                return new Date(dateValues[2], dateValues[1] - 1, dateValues[0]);
            }
            return null;
        }
        // Запись даты в поле
        function setInputDate(element, date) {
            let dateString = (date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate()) +
                (date.getMonth() > 8 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1)) + 
                date.getFullYear();
            element.value = dateString;
        }

        // Обновление цен
        function updatePrices(startDate, endDate) {
            let days = 0
            if(startDate && endDate) {
                days = Math.round((endDate.getTime() - startDate.getTime()) / ONE_DAY);
            }
            let roomPrice = days * dailyCost;
            let totalPrice = roomPrice + 300 - 2179;
            if(totalPrice < 0) totalPrice = 0;

            roomPriceText.innerHTML = `${dailyCost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}\u20bd х ${days} суток`;
            roomPriceCount.innerHTML = `${roomPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}\u20bd`;
            totalPriceCount.innerHTML = `${totalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}\u20bd`;
        }

    });
});