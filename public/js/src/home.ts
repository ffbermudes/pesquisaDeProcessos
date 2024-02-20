fetch('./views/cardProcesso.html')
.then(data => data.text())
.then(dados => {
    const divContainer: HTMLDivElement | null = document.querySelector('.container')
    
    if(divContainer !== null)
        divContainer.innerHTML += dados
})
