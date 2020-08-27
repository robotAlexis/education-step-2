import "../../blocks/forms/search-form/search-form.js";
import "../../blocks/forms/registration-form/registration-form.js";
import "../../blocks/forms/reservation-form/reservation-form.js";
import "../../blocks/forms/login-form/login-form.js";

import "../../blocks/calendar/calendar.js";
import "../../blocks/preview/preview.js";

document.addEventListener('DOMContentLoaded', function(event) {

    if(document.querySelector('.cards') == null) return;


    // Форма бронирования

    // Даты
    document.querySelectorAll('.reservation-form .date-dropdown__input').forEach((dateInput, index) => {
        dateInput.value = ['19082019', '23082019'][index];
    });
    // Гости
    let customersButtons = document.querySelectorAll('.reservation-form .customers-dropdown__count-button_increase');
    customersButtons[0].dispatchEvent(new Event('click'));
    customersButtons[0].dispatchEvent(new Event('click'));
    customersButtons[1].dispatchEvent(new Event('click'));

    // Календарь

    document.querySelector('.cards__calendar').firstElementChild.openCalendar({
        todayDate: new Date(2019, 7, 8),
        startDate: new Date(2019, 7, 19),
        endDate: new Date(2019, 7, 23),
        callback: function(start, end) {
            alert(start.toLocaleDateString() + ' - ' + end.toLocaleDateString());
        }
    });
    document.querySelector('.cards__calendar').firstElementChild.classList.add('calendar_uikit');

    

});