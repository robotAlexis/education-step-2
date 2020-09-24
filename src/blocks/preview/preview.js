import "../rate-button/rate-button.js";

document.addEventListener('DOMContentLoaded', function(event) {

        // 
        document.querySelectorAll('.preview').forEach(previewElement => {

            // Элемент с картинкой
            let imageElement = previewElement.querySelector('.preview__photo-image');
            // Массив круглых кнопочек
            let roundButtonElements = Array.prototype.slice.call(previewElement.querySelectorAll('.preview__round-button'));

            // Ссылки для картинок
            let photos = imageElement.dataset.images.split(';');

            // Номер текущей фотографии
            let currentPhotoIndex = 0;

            // Обновление фотографии
            function resetPhoto() {
                imageElement.src = photos[currentPhotoIndex];

                roundButtonElements.forEach((buttonElement, i) => {
                    buttonElement.classList.toggle('preview__round-button_current', i == currentPhotoIndex);
                })
            }

            // Кнопка пролистывания вперёд
            previewElement.querySelector('.preview__right-photo-side .preview__side-button').onclick = function() {
                if(++currentPhotoIndex > photos.length - 1) currentPhotoIndex = 0;
                resetPhoto();
            }
            // Кнопка пролистывания назад
            previewElement.querySelector('.preview__left-photo-side .preview__side-button').onclick = function() {
                if(--currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1;
                resetPhoto();
            }
            // Круглые кнопочки
            roundButtonElements.forEach((buttonElement, i) => {
                buttonElement.onclick = function() {
                    currentPhotoIndex = i;
                    resetPhoto();
                }
            })

        });
});
