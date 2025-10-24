// Conectando Coinranking API
const apiKey = 'coinrankinga46e773fb414f28a1514ada263a52916dea95defc6cf1cf6'
const urlBase = 'https://api.coinranking.com/v2/coins/'
var retorno = null

// Método para conectar a API
const options = {
    method: 'GET',
    headers: {   
        'Content-Type' : 'aplication.json',
        'x-access-token': `${apiKey}`,
        'Acess-Control-Allow-Origin' : '*'
    }
}

// Incializando a Api
async function conectarApi() {
    retorno = await fetch(`${urlBase}`,options)
        .then((response) => {
            if(response.ok) {
                response.json().then((json) => {
                    console.log(json.data.coins)

                    let coinsData = json.data.coins

                    if(coinsData.lenght > 0){
                        var cryptoCoins = ""
                    }

                    // For Loop
                    coinsData.forEach((coins) => {
                        cryptoCoins += "<tr>"
                        cryptoCoins += `<th scope="row">${coins.rank}</th>`
                        cryptoCoins += `<td><img src=${coins.iconUrl} width="36px" height="36px"></td>`
                        cryptoCoins += `<td>${coins.name}</td>`
                        cryptoCoins += `<td>${coins.symbol}</td>`
                        cryptoCoins += `<td>${Math.fround(coins.price)} $</td>`
                        cryptoCoins += `<td>${Math.fround(coins.marketCap).toFixed(0)} $</td>`;"<td>";
                    })
                        document.getElementById("data").innerHTML = cryptoCoins
                })
            }
        })
        .catch((error) => {console.log(error)})
    
}
conectarApi()

