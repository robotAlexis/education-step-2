
document.addEventListener('DOMContentLoaded', function(event){
    let Inputmask = require('inputmask');

    Inputmask({
        alias: 'datetime',
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ'
    })
        .mask(
            document.querySelectorAll('.date-dropdown__input')
        );
});
