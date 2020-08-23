import "../../blocks/masked-text-field/masked-text-field.js"
import "../../blocks/dropdown/rooms-dropdown/rooms-dropdown.js"
import "../../blocks/dropdown/customers-dropdown/customers-dropdown.js"
import "../../blocks/expandable-checkbox-list/expandable-checkbox-list.js"
import "../../blocks/range-slider/range-slider.js"


document.addEventListener('DOMContentLoaded', function(event){

    if(document.querySelector('.form-elements') == null) return;

    // Текстовое поле со стилем как при фокусе
    
    document.querySelector('.form-elements__focus-text-field').querySelector('.text-field').classList.add('text-field_hover');


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
    roomsDropdowns[1].querySelector('.rooms-dropdown__text').classList.add('rooms-dropdown__text_opened');
    roomsDropdowns[1].querySelector('.rooms-dropdown__item-list').classList.add('rooms-dropdown__item-list_opened');



    // Customers dropdown

    let customersDropdowns = document.querySelectorAll('.customers-dropdown');
    // Разворачивание
    [1, 2].forEach(i => {
        customersDropdowns[i].querySelector('.customers-dropdown__text').classList.add('customers-dropdown__text_opened');
        customersDropdowns[i].querySelector('.customers-dropdown__item-list').classList.add('customers-dropdown__item-list_opened');    
    })
    // Расстановка значений
    customersDropdowns[2].querySelector('.customers-dropdown__text').innerHTML = '3 гостя';
    let customersDropdownItems = customersDropdowns[2].querySelectorAll('.customers-dropdown__item');
    customersDropdownItems[0].querySelector('.customers-dropdown__count-text').value = 2;
    customersDropdownItems[0].querySelector('.customers-dropdown__count-button_decrease').classList.remove('customers-dropdown__count-button_inactive');
    customersDropdownItems[1].querySelector('.customers-dropdown__count-text').value = 1;
    customersDropdownItems[1].querySelector('.customers-dropdown__count-button_decrease').classList.remove('customers-dropdown__count-button_inactive');
    customersDropdowns[2].querySelector('.customers-dropdown__clear-button').classList.remove('customers-dropdown__clear-button_inactive');



});
