//freecurrencyapi
const apiKey = 'fca_live_ZS71eOBRfsh29jHELTYbm1wz4AtBIFeEM3in3EeW'

async function capturarDados(){
    let dados = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`)
        .then(response => response.json)
        console.log(dados)
}
