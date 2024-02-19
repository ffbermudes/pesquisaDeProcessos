const dados = {
    "query": {
        "match": {
            "numeroProcesso": "00109211620208080035"
        }
    }
}

fetch("https://api-publica.datajud.cnj.jus.br/api_publica_tjes/_search", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=='
    },
    body: JSON.stringify(dados)
    
}).then(dados => dados.json())
.then(javascript => console.log(javascript))