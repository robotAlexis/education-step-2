import "../../blocks/masked-text-field/masked-text-field.js"
import "../../blocks/dropdown/date-dropdown/date-dropdown.js"
import "../../blocks/dropdown/rooms-dropdown/rooms-dropdown.js"
import "../../blocks/dropdown/customers-dropdown/customers-dropdown.js"
import "../../blocks/expandable-checkbox-list/expandable-checkbox-list.js"
import "../../blocks/range-slider/range-slider.js"


document.addEventListener('DOMContentLoaded', function(event){

    if(document.querySelector('.form-elements') == null) return;

    // Текстовое поле со стилем как при фокусе
    
    document.querySelector('.form-elements__focus-text-field').querySelector('.text-field').classList.add('text-field_hover');


    // Заполнени поля с датой
    document.querySelectorAll('.form-elements__date-dropdown input').forEach(dateDropdownInput => {
        if(dateDropdownInput.getAttribute('name') == 'date-dropdown-2'){
            dateDropdownInput.value = '19082019';
        }
    });


    // Слайдер

    document.querySelector('.range-slider__target').noUiSlider.set([5000, 10000]);


    // Buttons

    document.querySelector(".form-elements__button_hover-default>.button").classList.add("button_hover");
    document.querySelector(".form-elements__button_hover-bordered>.button").classList.add("button_hover");
    document.querySelector(".form-elements__button_hover-backgroundless>.button").classList.add("button_hover");



    // Rooms dropdown

    let roomsDropdowns = document.querySelectorAll('.rooms-dropdown');
    // Расстановка значений
    roomsDropdowns.forEach(dropdown => {
        dropdown.querySelector('.rooms-dropdown__text').innerHTML = '2 спальни, 2 кровати, 0 ванные комнаты';
        let dropdownItems = dropdown.querySelectorAll('.rooms-dropdown__item');
        dropdownItems[0].querySelector('.rooms-dropdown__count-text').value = 2;
        dropdownItems[0].querySelector('.rooms-dropdown__count-button_decrease').classList.remove('rooms-dropdown__count-button_inactive');
        dropdownItems[1].querySelector('.rooms-dropdown__count-text').value = 2;
        dropdownItems[1].querySelector('.rooms-dropdown__count-button_decrease').classList.remove('rooms-dropdown__count-button_inactive');
    });
    // Отключение разворачивания верхнего дропдауна
    roomsDropdowns[0].querySelector('.rooms-dropdown__text').style['pointer-events'] = 'none';
    // Разворачивание нижнего дропдауна
    roomsDropdowns[1].querySelector('.rooms-dropdown__text').classList.add('rooms-dropdown__text_uikit');
    roomsDropdowns[1].querySelector('.rooms-dropdown__item-list').classList.add('rooms-dropdown__item-list_uikit');



    // Customers dropdown

    let customersDropdowns = document.querySelectorAll('.customers-dropdown');
    // Разворачивание
    [1, 2].forEach(i => {
        customersDropdowns[i].querySelector('.customers-dropdown__text').classList.add('customers-dropdown__text_uikit');
        customersDropdowns[i].querySelector('.customers-dropdown__item-list').classList.add('customers-dropdown__item-list_uikit');    
    })
    // Расстановка значений
    let customersButtons = customersDropdowns[2].querySelectorAll('.customers-dropdown__count-button_increase');
    customersButtons[0].dispatchEvent(new Event('click'));
    customersButtons[0].dispatchEvent(new Event('click'));
    customersButtons[1].dispatchEvent(new Event('click'));


});
