// Setando e Escondendo o Card (antes da 1ª Pesquisa)
document.getElementById('card').style.setProperty('display', 'none', 'important')

function Pesquisar() {
    document.getElementById('card').style.setProperty('display', 'block', 'important') // Chamando o Card
    let pais = document.getElementById('pais').value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data[0])
            console.log(data[0].capital[0])
            console.log(data[0].continents[0])
            console.log(data[0].population)

            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let cont = document.getElementById('cont')
            let pop = document.getElementById('pop')

            nome.innerHTML = pais
            capital.innerHTML = data[0].capital[0]
            cont.innerHTML = data[0].continents[0]
            pop.innerHTML = data[0].population
            bandeira.src = data[0].flags.svg
        })
}