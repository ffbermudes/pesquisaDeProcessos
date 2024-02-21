export default function fetchCardProcesso(array: Processo[]) {
    array.forEach(objeto =>{
        console.log(objeto)
        console.log('----')
        fetch('../../views/cardProcesso.html')
        .then(dados=>dados.text())
        .then(dados=>{

            const elementHtml: Element | null = document.querySelector('.cardsInject')

            if (elementHtml != null)
                elementHtml.innerHTML+= dados

        })
    })
}

interface Processo {
    cliente: string
    alvoProcesso: string
}