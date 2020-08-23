import "../../blocks/forms/search-form/search-form.js"
import "../../blocks/forms/registration-form/registration-form.js"
import "../../blocks/forms/reservation-form/reservation-form.js"
import "../../blocks/forms/login-form/login-form.js"

import "../../blocks/calendar/calendar.js"
import "../../blocks/preview/preview.js"

document.addEventListener('DOMContentLoaded', function(event){

    if(document.querySelector('.cards') == null) return;


    // Календарь

    document.querySelector('.calendar').openCalendar({
        todayDate: new Date(2019, 7, 8),
        startDate: new Date(2019, 7, 19),
        endDate: new Date(2019, 7, 23),
        callback: function(start, end) {
            alert(start.toLocaleDateString() + ' - ' + end.toLocaleDateString());
        }
    });
    document.querySelector('.calendar').classList.add('calendar_uikit');

});