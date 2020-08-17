let noUiSlider = require('nouislider');

document.addEventListener('DOMContentLoaded', function(event){
    document.querySelectorAll('.range-slider').forEach(slider => {

        // Inputs
        let inputs = slider.querySelectorAll('.range-slider__input');

        // Создание слайдера
        let sliderTarget = slider.querySelector('.range-slider__target');
        noUiSlider.create(sliderTarget, {
            range: {
                'min': Number(inputs[0].value),
                'max': Number(inputs[1].value)
            },
            start: [Number(inputs[0].value), Number(inputs[1].value)],
            step: 1,
            connect: true,
            cssPrefix: 'range-slider__'
        });

        // Текст для отображения значений слайдера
        let sliderValuesText = slider.querySelector('.range-slider__price-text');
        sliderTarget.noUiSlider.on('update', function (values) {
            [0, 1].forEach( i => { inputs[i].value = Number(values[i]); } );
            sliderValuesText.innerHTML = `${formatNumber(inputs[0].value)}&#8381; - ${formatNumber(inputs[1].value)}&#8381`;
        });
        
        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
        }
        
    });
});