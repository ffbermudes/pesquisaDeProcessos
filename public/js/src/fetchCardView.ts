export default function fetchCardProcesso(array: Processo[], dataJson: Object) {

    const dadosInArray = Object.values(dataJson)

    console.log(dadosInArray)

    array.forEach((objeto, i) =>{

        const {cliente, alvoProcesso, nprocesso} = dadosInArray[i]

        console.log(dadosInArray[i])

        fetch('../../views/cardProcesso.html')
        .then(dados=>dados.text())
        .then(dados=>{

            const elementHtml = document.querySelector('.cardsInject')
            const containerCard = document.createElement('div')

            containerCard.classList.add('card')
            containerCard.classList.add('text-center')
            containerCard.classList.add('mb-3')

            containerCard.innerHTML = dados
            
            const elementNprocesso: Element | null = containerCard
            .querySelector('.card-header')

            const nprocessos:HTMLParagraphElement = document.createElement('p')
            nprocessos.classList.add('processo')
            nprocessos.innerHTML = nprocesso
            
            if(elementNprocesso!== null)
                elementNprocesso.appendChild(nprocessos)

            const elementAlvoProcesso: Element | null = containerCard
            .querySelector('.card-text')

            if(elementAlvoProcesso!== null)
            elementAlvoProcesso.innerHTML = alvoProcesso

            const elementCliente: Element | null = containerCard
            .querySelector('.card-title')

            if(elementCliente!== null)
            elementCliente.innerHTML = cliente


            if (elementHtml != null)
                elementHtml.appendChild(containerCard)

            console.log(containerCard)

        })
    })
}

interface Processo {
    cliente: string
    alvoProcesso: string
}