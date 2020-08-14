import "../../blocks/masked-text-field/masked-text-field.js"
import "../../blocks/dropdown/rooms-dropdown/rooms-dropdown.js"

// Кнопки
document.querySelector(".form-elements__button_hover-default>.button").classList.add("button_hover");
document.querySelector(".form-elements__button_hover-bordered>.button").classList.add("button_hover");
document.querySelector(".form-elements__button_hover-backgroundless>.button").classList.add("button_hover");


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
