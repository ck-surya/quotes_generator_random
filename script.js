
const url = 'https://get-quotes-api.p.rapidapi.com/random'
const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": 'd4d42dd09fmsh87cdc4023bcc908p1d6300jsna7658fede9f5',
      "x-rapidapi-host": "get-quotes-api.p.rapidapi.com",
    },
  };

const  generateQuote = ()=>{
    fetch(url,options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const quote = data['quote']['quote']
        const author = data['quote']['author']
        const msg = data['message']
        document.getElementById('quote').textContent = quote
        document.getElementById('author').textContent = `~${author}`
        document.getElementById('quote1').innerText = msg
    })
    .catch(error => console.log(error))
}



document.addEventListener('DOMContentLoaded',()=>{document.getElementById('generate').addEventListener('click', generateQuote)})
