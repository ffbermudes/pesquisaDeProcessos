export default function fetchCardProcesso(array) {
    array.forEach(objeto => {
        console.log(objeto);
        console.log('----');
        fetch('../../views/cardProcesso.html')
            .then(dados => dados.text())
            .then(dados => {
            const elementHtml = document.querySelector('.cardsInject');
            if (elementHtml != null)
                elementHtml.innerHTML += dados;
        });
    });
}
//# sourceMappingURL=fetchCardView.js.map