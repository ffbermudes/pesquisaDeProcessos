import fetchCardProcesso from './fetchCardView.js'

interface Processo {
    cliente: string
    alvoProcesso: string
}

// dasads
fetch('http://localhost:8087/processos/getProcessos')
    .then(data => data.json())
    .then(dados => {
        const array1: Processo[] = Object.values(dados)

        fetchCardProcesso(array1)
    })