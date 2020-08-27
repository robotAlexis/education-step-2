
document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelectorAll('.like-button').forEach(likeButtonElement => {

        likeButtonElement.onclick = function() {
            likeButtonElement.firstElementChild.innerHTML = likeButtonElement.classList.contains('like-button_liked') ?
                parseInt(likeButtonElement.firstElementChild.innerHTML) - 1 : parseInt(likeButtonElement.firstElementChild.innerHTML) + 1;
            likeButtonElement.classList.toggle('like-button_liked');
        }

    });

});