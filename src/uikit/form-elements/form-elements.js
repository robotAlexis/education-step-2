import "../../blocks/masked-text-field/masked-text-field.js"
import "../../blocks/dropdown/rooms-dropdown/rooms-dropdown.js"
import "../../blocks/dropdown/customers-dropdown/customers-dropdown.js"

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


/*

let formElements = document.querySelector(".form-elements");
if(formElements) {
    let focusTextField = document.querySelector(".form-elements__focus-text-field");
    if(focusTextField) focusTextField.lastElementChild.classList.add("text-field_hover");
    
    let dateDropdowns = document.querySelectorAll(".date-dropdown__text");
    dateDropdowns[dateDropdowns.length - 1].innerHTML = "19.08.2019";

    let defaultRoomDropdown = document.querySelector(".form-elements__default-rooms-dropdown").lastElementChild;
    defaultRoomDropdown.firstElementChild.innerHTML = "2 спальни, 2 кровати...";

    let expandedRoomDropdown = document.querySelector(".form-elements__expanded-rooms-dropdown").lastElementChild;
    expandedRoomDropdown.firstElementChild.innerHTML = "2 спальни, 2 кровати...";
    expandedRoomDropdown.firstElementChild.classList.add("rooms-dropdown__text_opened");
    expandedRoomDropdown.lastElementChild.classList.add("rooms-dropdown__item-list_opened");
    expandedRoomDropdown.lastElementChild.children[0].querySelector(".rooms-dropdown__count-text")
        .innerHTML = "2";
        expandedRoomDropdown.lastElementChild.children[1].querySelector(".rooms-dropdown__count-text")
        .innerHTML = "2";

    let likeButton = document.querySelector(".form-elements__block-name_like-button").nextElementSibling;
    likeButton.firstElementChild.firstElementChild.innerHTML = "2";
    likeButton = likeButton.nextElementSibling;
    likeButton.firstElementChild.classList.add("like-button_liked");
    likeButton.firstElementChild.firstElementChild.innerHTML = "12";

    let rateButton = document.querySelector(".form-elements__block-name_rate-button").nextElementSibling;
    for(let i = 0; i < 4; ++i)
        rateButton.firstElementChild.children[i].classList.add("rate-button_checked");
    rateButton = rateButton.nextElementSibling;
    for(let i = 0; i < 5; ++i)
        rateButton.firstElementChild.children[i].classList.add("rate-button_checked");

    let expandableCheckboxList = document.querySelector(".form-elements__expandable-checkbox-list-2").firstElementChild;
    expandableCheckboxList.firstElementChild.classList.add("expandable-checkbox-list__title_expanded");
    expandableCheckboxList.lastElementChild.classList.add("expandable-checkbox-list__body_expanded");

    let customersDropdown = document.querySelector(".form-elements__block-name_customers-dropdown-1").nextElementSibling.firstElementChild;
    customersDropdown.classList.add("customers-dropdown_opened");
    customersDropdown.firstElementChild.classList.add("customers-dropdown__text_opened");
    customersDropdown.lastElementChild.classList.add("customers-dropdown__item-list_opened");


}*/
