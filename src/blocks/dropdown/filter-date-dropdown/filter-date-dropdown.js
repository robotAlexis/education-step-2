import '../../calendar/calendar.js';

document.addEventListener('DOMContentLoaded', function(event) {

    // Массив названий месяцев
    let monthNames = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    // 
    document.querySelectorAll('.filter-date-dropdown').forEach(dropdownElement => {

        // Установка значений
        dropdownElement.updateFilterDateValues = updateValues;


        // Текстовое поле
        let textElement = dropdownElement.querySelector('.filter-date-dropdown__text');
        // Обработка нажатий текстового поля
        textElement.onclick = function(event) {
            if(calendarElement.isCalendarOpen()) {
                calendarElement.closeCalendar();
            }
            else {
                openCalendar();
            }
        }

        // Inputs
        let dropdownInputs = Array.prototype.slice.call(dropdownElement.querySelectorAll('.filter-date-dropdown__input'));

        // Календарь
        let calendarElement = dropdownElement.querySelector('.calendar');




        /* Функции */

        // Обновление значений
        function updateValues(startDate, endDate) {
            dropdownInputs[0].value = startDate.getTime();
            dropdownInputs[1].value = endDate.getTime();
            let dates = dropdownInputs.map(item => { return new Date(parseInt(item.value, 10)); })
            textElement.innerHTML = `${dates[0].getDate()} ${monthNames[dates[0].getMonth()]} - ${dates[1].getDate()} ${monthNames[dates[1].getMonth()]}`;
        }

        // Открытие календаря
        function openCalendar() {
            calendarElement.openCalendar({
                callback: updateValues,
                inputElements: [textElement], 
                startDate: (dropdownInputs[0].value ? new Date(parseInt(dropdownInputs[0].value, 10)) : new Date()),
                endDate: (dropdownInputs[1].value ? new Date(parseInt(dropdownInputs[1].value, 10)) : new Date())
            });
        }
        

    });

});