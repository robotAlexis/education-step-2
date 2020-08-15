
document.addEventListener('DOMContentLoaded', function(event){
    document.querySelectorAll('.expandable-checkbox-list').forEach(checkboxList => {
        let listTitle = checkboxList.querySelector('.expandable-checkbox-list__title');
        let listBody = checkboxList.querySelector('.expandable-checkbox-list__body');
        
        // Сворачивание и разворачивание
        listTitle.onclick = function(){
            listTitle.classList.toggle('expandable-checkbox-list__title_expanded');
            listBody.classList.toggle('expandable-checkbox-list__body_expanded');
        }
    });
});