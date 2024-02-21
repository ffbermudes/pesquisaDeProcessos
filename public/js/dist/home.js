import fetchCardProcesso from './fetchCardView.js';
// dasads
fetch('http://localhost:8087/processos/getProcessos')
    .then(data => data.json())
    .then(dados => {
    const array1 = Object.values(dados);
    fetchCardProcesso(array1);
});
//# sourceMappingURL=home.js.map