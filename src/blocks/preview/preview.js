import "../rate-button/rate-button.js";

document.addEventListener('DOMContentLoaded', function(event) {

        // 
        document.querySelectorAll('.preview').forEach(previewElement => {

            // Элемент с картинкой
            let imageElement = previewElement.querySelector('.preview__photo-image');
            // Массив круглых кнопочек
            let roundButtonElements = Array.prototype.slice.call(previewElement.querySelectorAll('.preview__round-button'));

            // Чтение dataset
            let imagesDataset = imageElement.dataset.images.split(';');
            // Данные для картинок
            let photos = [];
            photos.length = Math.floor(imagesDataset.length/5);
            for(let i = 0; i < photos.length; ++i) {
                photos[i] = {
                    url: imagesDataset[i * 5],
                    width: imagesDataset[i * 5 + 1],
                    height: imagesDataset[i * 5 + 2],
                    top: imagesDataset[i * 5 + 3],
                    left: imagesDataset[i * 5 + 4],
                }
            }

            // Номер текущей фотографии
            let currentPhotoIndex = 0;

            // Перелистывание к фотографии под новым индексом
            function resetPhoto() {
                imageElement.src = '/files/' + photos[currentPhotoIndex].url;
                imageElement.setAttribute('width', photos[currentPhotoIndex].width);
                imageElement.setAttribute('height', photos[currentPhotoIndex].height);
                imageElement.style.top = photos[currentPhotoIndex].top;
                imageElement.style.left = photos[currentPhotoIndex].left;

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
