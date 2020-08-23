document.addEventListener('DOMContentLoaded', function(event){

    // Список месяцев
    let monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    // Календари
    document.querySelectorAll('.calendar').forEach(calendarElement => {

        // Название месяца и номер года
        let calendarTitleElement = calendarElement.querySelector('.calendar__title');

        // Кнопки
        let leftButtonElement = calendarElement.querySelector('.calendar__left-arrow');
        let rightButtonElement = calendarElement.querySelector('.calendar__right-arrow');
        let clearButtonElement = calendarElement.querySelector('.calendar__clear-button');
        let okButtonElement = calendarElement.querySelector('.calendar__ok-button');

        // Контейнер с выбираемыми днями недели
        let daysFieldElement = calendarElement.querySelector('.calendar__days-field');
        daysFieldElement.onmouseout = onFieldMouseOut;

        // Ссылка на функцию, вызываемую по нажатию кнопки ok
        let onOk = function(startDate, endDate) {}

        // Текущая дата
        let todayDate = new Date();

        // Год и месяц в календаре
        let calendarYear = todayDate.getFullYear();
        let calendarMonth = todayDate.getMonth();

        // Выбранные даты
        let startDate = null;
        let endDate = null;

        // Созданные клетки с днями, которые можно выбирать
        let dayElements = {};
        // Номер дня, над которым висит курсор
        let hoveredDayNumber = null;




        // Открытие календаря
        calendarElement.openCalendar = function(input/* callback, start, end, today = (new Date())*/){
            /*{
                callback,
                startDate,
                endDate,
                todayDate
            }*/
            if(!input.todayDate) input.todayDate = new Date();

            onOk = input.callback;

            // Установка и проверка значений

            // Сегодняшняя дата
            todayDate = new Date(input.todayDate.getFullYear(), input.todayDate.getMonth(), input.todayDate.getDate());
            // Проверка введёных выбранных дат
            startDate = input.startDate ? (new Date(input.startDate.getFullYear(), input.startDate.getMonth(), input.startDate.getDate())) : null;
            endDate = input.endDate ? (new Date(input.endDate.getFullYear(), input.endDate.getMonth(), input.endDate.getDate())) : null;
            // Проверка, что выбранные даты позднее сегодняшней
            if(startDate && startDate.getTime() <= todayDate.getTime()) startDate = null;
            if(endDate && endDate.getTime() <= todayDate.getTime()) endDate = null;
            // Проверка, что обе даты существуют после всех условий
            if(startDate && endDate){
                if(startDate.getTime() > endDate.getTime()){
                    let t = startDate;
                    startDate = endDate;
                    endDate = t;
                }
            }
            else {
                startDate = endDate = null;
            }

            // Выбор месяца и года
            let calendarDate = startDate ? startDate : todayDate;
            calendarYear = calendarDate.getFullYear();
            calendarMonth = calendarDate.getMonth();

            // Создание поля
            createField();
            // Подсветка выбранных или выбираемых дней
            updateHighlight();

            // Включение отображения календаря
            calendarElement.classList.add('calendar_active');
        };




        // Перемотка влево и вправо
        leftButtonElement.onclick = function () {
            if(--calendarMonth < 0) { calendarMonth = 11; --calendarYear; }
            createField();
            updateHighlight();
        };
        rightButtonElement.onclick = function () {
            if(++calendarMonth > 11) { calendarMonth = 0; ++calendarYear; }
            createField();
            updateHighlight();
        }



        // Установка определённого месяца
        function createField(){
            // Текст названия месяца и года
            calendarTitleElement.innerHTML = monthNames[calendarMonth] + ' ' + calendarYear;

            // Очистка календаря
            daysFieldElement.innerHTML = "";
            dayElements = {};

            // Смещение первого числа месяца относительно понедельника
            let dayShift = (new Date(calendarYear, calendarMonth, 1)).getDay() - 1;
            if(dayShift < 0) dayShift = 0;
            // Количетсво недель
            let weeksCount = Math.ceil(((new Date(calendarYear, calendarMonth + 1, 0)).getDate() + dayShift) / 7);

            // Заполнение календаря
            for(let i = 0; i < weeksCount; i++) {

                let weekRow = daysFieldElement.appendChild(document.createElement('ul'));
                weekRow.classList.add('calendar__week-row');

                for(let j = 0; j < 7; j++){
                    // Дата дня в календарике
                    let calendarDay = new Date(calendarYear, calendarMonth, i * 7 + j - dayShift + 1);
                    let dayNumber = calendarDay.getDate();

                    // Элементы для дня месяца
                    let dayCellElement = weekRow.appendChild(document.createElement('li'));
                    dayCellElement.classList.add('calendar__day-cell');
                    let dayTextElement = dayCellElement.appendChild(document.createElement('p'));
                    dayTextElement.classList.add('calendar__day-text');
                    
                    // Текст с номером дня месяца
                    dayTextElement.innerHTML = dayNumber;
                    
                    // Проверка на совпадение месяца
                    if(calendarDay.getMonth() != calendarMonth) {
                        dayTextElement.classList.add('calendar__day-text_theme_another-month');
                    }
                    else {
                        // Проверка на сегодняшний день
                        if(calendarDay.getTime() == todayDate.getTime())
                            dayTextElement.classList.add('calendar__day-text_theme_today');
                        
                        // Проверка на то, что дата позже сегодняшней
                        if(calendarDay.getTime() > todayDate.getTime()) {
                            // Добавление элементов в список
                            dayElements[dayNumber] = dayCellElement;
                            // Добавление в обработчиков к клетке
                            dayCellElement.onmouseover = function() { onDayMouseOver(dayNumber); }
                            dayCellElement.onclick = function() { onDayClick(dayNumber); }
                        }

                    }
                }
            }
        }



        // Обновление подстветки
        function updateHighlight() {
            // Дата клетки, над которой курсор
            let hoveredData = hoveredDayNumber ? (new Date(calendarYear, calendarMonth, hoveredDayNumber)) : null;

            // Пробегаем по списку выбираемых клеток
            for(day in dayElements) {
                // Дата, которой соответствует клетка
                let cellDate = new Date(calendarYear, calendarMonth, day);

                // Сброс всех подстветок
                dayElements[day].firstElementChild.classList.remove('calendar__day-text_theme_selected');
                dayElements[day].classList.remove(
                    'calendar__day-cell_selected',
                    'calendar__day-cell_first-selected',
                    'calendar__day-cell_last-selected'
                );

                // Если обе даты выбраны
                if(startDate && endDate) {
                    // Если это начальная или конечная дата
                    if(cellDate.getTime() == startDate.getTime() || cellDate.getTime() == endDate.getTime()){
                        dayElements[day].firstElementChild.classList.add('calendar__day-text_theme_selected');
                        dayElements[day].classList.toggle('calendar__day-cell_first-selected', cellDate.getTime() == startDate.getTime());
                        dayElements[day].classList.toggle('calendar__day-cell_last-selected', cellDate.getTime() == endDate.getTime());
                    }
                    // Если дата в промежутке между начальной и конечной датой
                    else if(cellDate.getTime() > startDate.getTime() && cellDate.getTime() < endDate.getTime()) {
                        dayElements[day].classList.add('calendar__day-cell_selected');
                    }
                    // Если это дата, над которой курсор
                    else if(hoveredData && cellDate.getTime() == hoveredData.getTime()) {
                        dayElements[day].classList.add('calendar__day-cell_first-selected', 'calendar__day-cell_last-selected');
                    }
                }

                // Если выбрана начальная дата
                else if(startDate) {
                    // Если это начальная дата
                    if(cellDate.getTime() == startDate.getTime()){
                        dayElements[day].firstElementChild.classList.add('calendar__day-text_theme_selected');
                        dayElements[day].classList.toggle('calendar__day-cell_first-selected', hoveredData && hoveredData.getTime() > startDate.getTime());
                        dayElements[day].classList.toggle('calendar__day-cell_last-selected', hoveredData && hoveredData.getTime() < startDate.getTime());
                    }
                    // Если дата в промежутке между начальной датой и датой клетки, над которой курсор
                    else if(hoveredData && ((cellDate.getTime() > startDate.getTime() && cellDate.getTime() < hoveredData.getTime()) || (cellDate.getTime() < startDate.getTime() && cellDate.getTime() > hoveredData.getTime()))) {
                        dayElements[day].classList.add('calendar__day-cell_selected');
                    }
                    // Если это дата, над которой курсор
                    else if(hoveredData && cellDate.getTime() == hoveredData.getTime()) {
                        dayElements[day].classList.toggle('calendar__day-cell_first-selected', hoveredData.getTime() < startDate.getTime());
                        dayElements[day].classList.toggle('calendar__day-cell_last-selected', hoveredData.getTime() > startDate.getTime());
                    }
                }

                // Если не выбрана ни одна дата
                else {
                    // Если это дата, над которой курсор
                    if(hoveredData && cellDate.getTime() == hoveredData.getTime()) {
                        dayElements[day].classList.add('calendar__day-cell_first-selected', 'calendar__day-cell_last-selected');
                    }
                }
            }
        }



        // Пересечение курсора и клетки
        function onDayMouseOver(index) {
            hoveredDayNumber = index;
            updateHighlight();
        }

        // Уход курсора с поля клеток
        function onFieldMouseOut() {
            hoveredDayNumber = null;
            updateHighlight();
        }

        // Нажатие на клетку
        function onDayClick(index) {

            let clickedData = new Date(calendarYear, calendarMonth, index);

            if(startDate && endDate) {
                startDate = clickedData;
                endDate = null;
            }
            else if(startDate) {
                if(clickedData.getTime() < startDate.getTime()) {
                    endDate = startDate
                    startDate = clickedData;
                }
                else if(clickedData.getTime() > startDate.getTime()) {
                    endDate = clickedData;
                }
            }
            else {
                startDate = clickedData;
            }

            updateHighlight();
        }





        // Нажатие на кнопку "Очистить"
        clearButtonElement.onclick = function() {
            startDate = endDate = null;
            calendarYear = todayDate.getFullYear();
            calendarMonth = todayDate.getMonth();
            createField();
            updateHighlight();
        }

        

        // Нажатие на кнопку "Применить"
        okButtonElement.onclick = function() {
            // Если хотя бы одна дата выбрана
            if(startDate) {
                // Выполнение привязанной функции
                onOk(startDate, endDate ? endDate : startDate);
                // Выключение отображения календаря
                calendarElement.classList.remove('calendar_active');
            }
        }

    });

});