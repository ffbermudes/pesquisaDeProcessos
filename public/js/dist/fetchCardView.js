export default function fetchCardProcesso(array, dataJson) {
    const dadosInArray = Object.values(dataJson);
    console.log(dadosInArray);
    array.forEach((objeto, i) => {
        const { cliente, alvoProcesso, nprocesso } = dadosInArray[i];
        console.log(dadosInArray[i]);
        fetch('../../views/cardProcesso.html')
            .then(dados => dados.text())
            .then(dados => {
            const elementHtml = document.querySelector('.cardsInject');
            const containerCard = document.createElement('div');
            containerCard.classList.add('card');
            containerCard.classList.add('text-center');
            containerCard.classList.add('mb-3');
            containerCard.innerHTML = dados;
            const elementNprocesso = containerCard
                .querySelector('.card-header');
            const nprocessos = document.createElement('p');
            nprocessos.classList.add('processo');
            nprocessos.innerHTML = nprocesso;
            if (elementNprocesso !== null)
                elementNprocesso.appendChild(nprocessos);
            const elementAlvoProcesso = containerCard
                .querySelector('.card-text');
            if (elementAlvoProcesso !== null)
                elementAlvoProcesso.innerHTML = alvoProcesso;
            const elementCliente = containerCard
                .querySelector('.card-title');
            if (elementCliente !== null)
                elementCliente.innerHTML = cliente;
            if (elementHtml != null)
                elementHtml.appendChild(containerCard);
            console.log(containerCard);
        });
    });
}
//# sourceMappingURL=fetchCardView.js.map