"use strict";
fetch('./views/cardProcesso.html')
    .then(data => data.text())
    .then(dados => {
    const divContainer = document.querySelector('.container');
    if (divContainer !== null)
        divContainer.innerHTML += dados;
});
