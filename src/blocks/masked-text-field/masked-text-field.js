var Inputmask = require("inputmask");

var selector = document.getElementsByClassName("masked-text-field");
Inputmask({"alias": "datetime",
    "inputFormat": "dd.mm.yyyy",
    "placeholder": "ДД.ММ.ГГГГ"}).mask(selector);

